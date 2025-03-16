# HK Site - Next.js Showcase Website

## Overview
This is a modern showcase website built with Next.js 14 and Tailwind CSS, featuring a responsive design and direct email contact functionality.

## Features
- Responsive design with Tailwind CSS
- Modern UI with animations
- Direct email contact form
- Fast performance with Next.js

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

3. Set up environment variables
Create a `.env.local` file with the following variables:
```
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
PERSONAL_EMAIL=your_personal_email@example.com
```

4. Run development server
```bash
npm run dev
```

## Deployment
- The site is configured for deployment on Vercel
- Set environment variables in Vercel dashboard:
  - `EMAIL_USER`
  - `EMAIL_PASSWORD`
  - `PERSONAL_EMAIL`

## Email Configuration
For Gmail users, you'll need to:
1. Enable 2-factor authentication
2. Generate an app password
3. Use that app password in the EMAIL_PASSWORD environment variable

## Technologies
- Next.js 14
- Tailwind CSS
- TypeScript
- Nodemailer
- Framer Motion

## License
MIT License