import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

function generateJWTSecret() {
  return crypto.randomBytes(64).toString('hex');
}

function updateEnvFile() {
  const envPath = path.resolve(process.cwd(), '.env');
  let envContent = fs.readFileSync(envPath, 'utf8');
  
  const secretRegex = /JWT_SECRET=.*/;
  const newSecret = `JWT_SECRET=${generateJWTSecret()}`;
  
  if (secretRegex.test(envContent)) {
    envContent = envContent.replace(secretRegex, newSecret);
  } else {
    envContent += `\n${newSecret}\n`;
  }
  
  fs.writeFileSync(envPath, envContent);
  console.log('JWT Secret generated and updated in .env file');
}

updateEnvFile();