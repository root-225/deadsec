# MongoDB Guide for DeadSec Project

## Connection Status

Your MongoDB connection is working correctly! The database server is running locally and your application can connect to it using the connection string in your `.env.local` file.

## Current Database Status

- **Database Name**: deadsec
- **Host**: localhost
- **Port**: 27017
- **Status**: Empty (No collections created yet)

## Next Steps

Now that your MongoDB connection is working, here are the next steps you can take:

### 1. Create Data Through Your Application

The easiest way to create collections and documents is to use your application:

- Run your application with `npm run dev`
- Use the application features that create data (like submitting a contact form)
- This will automatically create the necessary collections and documents

### 2. Create Test Data Manually

You can create test data manually using MongoDB Compass (a GUI for MongoDB) or the MongoDB Shell:

```bash
# Using MongoDB Shell (if installed)
mongosh
> use deadsec
> db.contactSubmissions.insertOne({
  name: "Test User",
  email: "test@example.com",
  subject: "Test Subject",
  message: "This is a test message",
  createdAt: new Date()
})
```

### 3. Create a Data Seeding Script

You can create a script to seed your database with initial data:

```javascript
// scripts/seed-database.js
const mongoose = require('mongoose');
const ContactSubmission = require('../src/models/ContactSubmission').default;
const User = require('../src/models/User').default;

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/deadsec';

async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
    
    // Create a test user
    const testUser = new User({
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'securepassword', // In production, hash this password
      isAdmin: true
    });
    
    await testUser.save();
    console.log('Test user created');
    
    // Create a test contact submission
    const testSubmission = new ContactSubmission({
      name: 'Test Contact',
      email: 'contact@example.com',
      subject: 'Test Subject',
      message: 'This is a test contact submission',
      phone: '123-456-7890'
    });
    
    await testSubmission.save();
    console.log('Test contact submission created');
    
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed');
  }
}

seedDatabase();
```

### 4. Explore Your Models

Your project already has these MongoDB models set up:

- **User**: For user accounts and authentication
- **ContactSubmission**: For storing contact form submissions

You can create additional models as needed for your application.

### 5. MongoDB vs PostgreSQL

Your project appears to have configurations for both MongoDB and PostgreSQL:

- MongoDB is currently set up and working
- PostgreSQL configuration exists but is commented out in your `.env.local` file

You can choose to use either or both databases depending on your needs:

- **MongoDB**: Great for flexible schema, document-oriented data
- **PostgreSQL**: Better for relational data with strict schemas

## Checking Connection

You can always verify your MongoDB connection by running:

```bash
node scripts/test-mongodb-connection.js
```

This will show you the connection status and list any collections in your database.