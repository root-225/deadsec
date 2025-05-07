// Simple script to test MongoDB connection
const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/deadsec';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ Successfully connected to MongoDB');
    console.log('Connection details:');
    console.log(`- Database: ${MONGODB_URI.split('/').pop()}`);
    console.log(`- Host: ${MONGODB_URI.split('/')[2].split(':')[0]}`);
    console.log(`- Port: ${MONGODB_URI.split('/')[2].split(':')[1] || '27017'}`);
    
    // List all collections in the database
    mongoose.connection.db.listCollections().toArray()
      .then(async (collections) => {
        if (collections.length === 0) {
          console.log('\nℹ️ No collections found in the database. Your database is empty.');
          console.log('You can start creating collections and documents through your application.');
        } else {
          console.log('\n📋 Available collections:');
          collections.forEach(collection => {
            console.log(`- ${collection.name}`);
          });
        }
        // Vérifier l'existence de l'admin
          const adminUser = await mongoose.connection.collection('users').findOne({ role: 'admin' });
          
          if (adminUser) {
            console.log('\n🛡️  Utilisateur admin trouvé:');
            console.log(`- Email: ${adminUser.email}`);
            console.log(`- Role: ${adminUser.role}`);
          } else {
            console.log('\n❌ Aucun utilisateur admin trouvé');
            console.log('Exécutez le script seed-admin.ts pour en créer un');
          }

          mongoose.connection.close();
          process.exit(0);
      })
      .catch(err => {
        console.error('Error listing collections:', err);
        mongoose.connection.close();
        process.exit(1);
      });
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });