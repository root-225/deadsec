import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qfoxfvmgwnlchjzimcfu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmb3hmdm1nd25sY2hqemltY2Z1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MTYyMjc3MSwiZXhwIjoyMDU3MTk4NzcxfQ.cBS-HyTDSqKPyWQcZMa4yp_r0U26tKZC7aBqKGNpIgg';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  try {
    // Try to fetch data from a table
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .limit(1);

    if (error) {
      console.error('Error:', error.message);
      return;
    }

    console.log('Connection successful!');
    console.log('Data:', data);
  } catch (error) {
    console.error('Connection failed:', error);
  }
}

testConnection(); 