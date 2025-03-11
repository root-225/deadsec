# Admin Dashboard

A secure admin dashboard built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🔐 Secure Authentication
- 📊 Admin Dashboard
- 🚀 Fast Performance
- 🎨 Modern UI/UX
- 📱 Responsive Design

## Getting Started

### Prerequisites

- Node.js 18+ 
- Git
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd hk_site
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory:
```env
JWT_SECRET=your_super_secret_jwt_key_here_please_change_in_production
NODE_ENV=development
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Test Credentials

- Email: admin@example.com
- Password: password123

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables in Vercel dashboard
5. Deploy!

### Manual Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Contributing

1. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit:
```bash
git add .
git commit -m "Add your commit message"
```

3. Push to your branch:
```bash
git push origin feature/your-feature-name
```

4. Create a Pull Request on GitHub

## Environment Variables

- `JWT_SECRET`: Secret key for JWT token generation
- `NODE_ENV`: Environment (development/production)

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── (admin)/        # Admin routes
│   ├── api/            # API routes
│   └── ...
├── components/         # React components
├── lib/               # Utility functions
└── middleware.ts      # Authentication middleware
```

## Security Considerations

- JWT tokens are stored in HTTP-only cookies
- CSRF protection enabled
- Rate limiting implemented
- Security headers configured
- Input validation on all forms

## License

MIT License 