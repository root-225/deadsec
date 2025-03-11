import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';

const supabaseUrl = 'https://qfoxfvmgwnlchjzimcfu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmb3hmdm1nd25sY2hqemltY2Z1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MTYyMjc3MSwiZXhwIjoyMDU3MTk4NzcxfQ.cBS-HyTDSqKPyWQcZMa4yp_r0U26tKZC7aBqKGNpIgg';

const supabase = createClient(supabaseUrl, supabaseKey);

async function createAdminUser() {
  try {
    // First, delete any existing admin user
    await supabase
      .from('users')
      .delete()
      .eq('email', 'admin@example.com');

    const hashedPassword = await bcrypt.hash('admin123', 10);
    
    const { data: user, error } = await supabase
      .from('users')
      .insert([
        {
          email: 'admin@example.com',
          password: hashedPassword,
          name: 'Admin User',
          role: 'admin',
        },
      ])
      .select()
      .single();

    if (error) {
      throw error;
    }

    console.log('Admin user created successfully:', user);
    console.log('\nLogin credentials:');
    console.log('Email: admin@example.com');
    console.log('Password: admin123');
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
}

createAdminUser(); 