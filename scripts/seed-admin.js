const mongoose = require('mongoose');
const User = require('../dist/src/models/User').default; // Import from compiled JS file
const bcrypt = require('bcryptjs');

async function seedAdmin() {
  let connection;
  try {
    // Use MONGODB_URI from environment variables, ensure it's defined
    const mongoURI = process.env.MONGODB_URI;
    if (!mongoURI) {
      console.error('❌ MONGODB_URI environment variable not set.');
      return; // Exit if URI is not set
    }
    // Store the connection to check its state later
    connection = await mongoose.connect(mongoURI);
    console.log('🔌 Connected to MongoDB');

    const adminExists = await User.findOne({ email: 'admin@deadsec.com' });

    if (!adminExists) {
      const hashedPassword = await bcrypt.hash('deadsec2024', 12);
      await User.create({
        name: 'Admin User', // Add the required name field
        email: 'admin@deadsec.com',
        password: hashedPassword,
        isAdmin: true // Use isAdmin field as defined in the model
      });
      console.log('✅ Admin utilisateur créé avec succès');
    } else {
      console.log('ℹ️ L\'utilisateur admin existe déjà');
    }
  } catch (error) {
    console.error('❌ Erreur:', error);
  } finally {
    // Ensure disconnection happens only if connection was established
    if (connection && mongoose.connection.readyState === 1) {
        await mongoose.disconnect();
        console.log('🔌 Disconnected from MongoDB');
    }
  }
}

seedAdmin();