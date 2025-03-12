import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function createAdminUser() {
  const email = 'admin@example.com';
  const password = 'AdminPassword123!';

  try {
    // Hash the password
    const passwordHash = await hash(password, 10);

    // Create admin user
    const admin = await prisma.admin.create({
      data: {
        email,
        passwordHash
      }
    });

    console.log('Admin user created successfully:', admin);
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdminUser();