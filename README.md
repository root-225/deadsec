# HK Site - Next.js Admin Dashboard

## Overview
This is a full-featured admin dashboard built with Next.js 14, Prisma, and Tailwind CSS, featuring secure authentication and admin panel functionality.

## Features
- Secure admin login system
- JWT-based authentication
- Responsive design with Tailwind CSS
- Admin dashboard with metrics
- SQLite database with Prisma ORM

## Prerequisites
- Node.js (v18 or later)
- npm

## Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/yourusername/hk-site.git
cd hk-site
```

2. Install dependencies
```bash
npm install
```

3. Generate Prisma client
```bash
npx prisma generate
```

4. Create database and run migrations
```bash
npx prisma db push
```

5. Create admin user
```bash
npx ts-node scripts/create-admin.ts
```

6. Generate JWT Secret
```bash
npx ts-node scripts/generate-jwt-secret.ts
```

7. Run development server
```bash
npm run dev
```

## Deployment
- The site is configured for deployment on Vercel
- Set environment variables in Vercel dashboard:
  - `DATABASE_URL`
  - `JWT_SECRET`

## Login Credentials
- Email: admin@example.com
- Password: AdminPassword123!

## Technologies
- Next.js 14
- Prisma
- Tailwind CSS
- TypeScript
- JWT Authentication
- Framer Motion

## License
MIT License