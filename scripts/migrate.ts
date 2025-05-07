import { query } from '../src/lib/dbClient';
import { promises as fs } from 'fs';
import * as path from 'path';

async function runMigrations() {
  try {
    await query(`CREATE TABLE IF NOT EXISTS migrations (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) UNIQUE NOT NULL,
      executed_at TIMESTAMPTZ DEFAULT NOW()
    )`);

    const migrationFiles = await fs.readdir(path.join(process.cwd(), 'migrations'));
    const executedMigrations = (await query('SELECT name FROM migrations')).rows.map((r: { name: string }) => r.name);

    for (const file of migrationFiles.sort()) {
      if (!executedMigrations.includes(file)) {
        console.log(`Running migration: ${file}`);
        const sql = await fs.readFile(path.join(__dirname, `../migrations/${file}`), 'utf8');
        await query(sql);
        await query('INSERT INTO migrations (name) VALUES ($1)', [file]);
      }
    }
    console.log('Migrations completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

runMigrations();