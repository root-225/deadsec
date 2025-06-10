# deadsec Website

A modern, responsive website for deadsec showcasing services in cloud computing, AI, cybersecurity, and digital transformation.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works across all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Modern UI**: Clean, professional design with animations and transitions
- **Multi-language Support**: Content available in French
- **Optimized Performance**: Fast loading times and optimized assets
- **SEO Friendly**: Proper metadata and semantic HTML
- **Database Integration**: MySQL/phpMyAdmin support

## 🧰 Tech Stack

- **Next.js**: React framework for server-side rendering and static site generation
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **React Icons**: Popular icon library
- **MySQL**: Database for storing contact submissions and inscriptions
- **phpMyAdmin**: Database administration tool

## 📦 Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/deadsec-site.git
cd deadsec-site
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```

Edit the `.env` file with your database and email configuration:
```env
# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_NAME=deadsec_db
DB_USER=root
DB_PASSWORD=your_password

# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
PERSONAL_EMAIL=your-personal-email@example.com
```

4. Set up the database
```bash
# Make sure MySQL is running and phpMyAdmin is accessible
npm run db:setup
```

Or manually import the schema:
```bash
mysql -u root -p < database/schema.sql
```

5. Run the development server
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🗄️ Database Setup with phpMyAdmin

### Prerequisites
- XAMPP, WAMP, or MAMP installed (includes Apache, MySQL, and phpMyAdmin)
- Or standalone MySQL and phpMyAdmin installation

### Setup Steps

1. **Start your local server stack:**
   - If using XAMPP: Start Apache and MySQL from the XAMPP control panel
   - If using WAMP: Start all services from WAMP manager
   - If using MAMP: Start servers from MAMP interface

2. **Access phpMyAdmin:**
   - Open your browser and go to `http://localhost/phpmyadmin`
   - Login with your MySQL credentials (default: username `root`, password empty or `root`)

3. **Create the database:**
   - Click "New" in the left sidebar
   - Enter database name: `deadsec_db`
   - Select collation: `utf8mb4_unicode_ci`
   - Click "Create"

4. **Import the schema:**
   - Select the `deadsec_db` database
   - Click on the "Import" tab
   - Click "Choose File" and select `database/schema.sql` from your project
   - Click "Go" to import

5. **Verify the setup:**
   - You should see the following tables created:
     - `users`
     - `contact_submissions`
     - `inscriptions`
     - `services`

### Database Configuration

Update your `.env` file with the correct database credentials:

```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=deadsec_db
DB_USER=root
DB_PASSWORD=your_mysql_password
```

### Testing the Connection

Run the setup script to test your database connection:
```bash
node scripts/setup-database.js
```

## 📚 Documentation

The project includes comprehensive documentation to help you understand and extend the website:

- [**GitHub Guide**](./docs/GITHUB_GUIDE.md) - Complete guide for Git setup, GitHub integration, and deployment
- [**Image Guide**](./docs/IMAGE_GUIDE.md) - Detailed instructions for image management and optimization
- [**Services Guide**](./docs/SERVICES.md) - Information about service types and how to customize them

## 🖼️ Logo Configuration

The logo has been updated to use your custom image. The logo component now uses:
- Image file: `/public/images/general/Deadsec_logo.png`
- Responsive sizing based on the `size` prop
- Hover animations when `animated` is true
- Optional text display with `withText` prop

## 🛠️ Development Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Format code with Prettier
npm run format

# Analyze bundle size
npm run analyze

# Database setup
npm run db:setup

# Deploy to Vercel
npm run deploy:vercel

# Deploy to Netlify
npm run deploy:netlify
```

## 🗃️ Database Schema

### Tables

1. **users**: User accounts and admin management
2. **contact_submissions**: Contact form submissions
3. **inscriptions**: Formation/course registrations
4. **services**: Service offerings and descriptions

### Key Features

- Auto-incrementing primary keys
- Timestamp tracking (created_at, updated_at)
- Email validation and uniqueness constraints
- Status tracking for submissions and inscriptions
- JSON support for complex data (service features)

## 🚀 Deployment

### Database Deployment

For production deployment, you'll need to:

1. Set up a production MySQL database
2. Update environment variables with production credentials
3. Run the schema setup on your production database
4. Ensure your hosting provider supports MySQL connections

### Recommended Hosting

- **Vercel**: Excellent for Next.js applications
- **Netlify**: Good alternative with easy deployment
- **DigitalOcean**: For full control with droplets
- **AWS RDS**: For managed MySQL database

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Support

If you need help with setup or have questions:

1. Check the documentation in the `docs/` folder
2. Review the database schema in `database/schema.sql`
3. Test your database connection with the provided scripts
4. Contact support via the website contact form

## 🔧 Troubleshooting

### Common Database Issues

1. **Connection refused**: Make sure MySQL is running
2. **Access denied**: Check your username and password in `.env`
3. **Database doesn't exist**: Run the setup script or create manually in phpMyAdmin
4. **Table doesn't exist**: Import the schema file via phpMyAdmin

### Logo Issues

1. **Logo not displaying**: Ensure the image file exists at `/public/images/general/Deadsec_logo.png`
2. **Image quality**: The logo component uses Next.js Image optimization
3. **Size issues**: Adjust the `size` prop on the Logo component