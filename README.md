# deadsec Website

A modern, responsive website for deadsec showcasing services in cloud computing, AI, cybersecurity, and digital transformation.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works across all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Modern UI**: Clean, professional design with animations and transitions
- **Multi-language Support**: Content available in French
- **Optimized Performance**: Fast loading times and optimized assets
- **SEO Friendly**: Proper metadata and semantic HTML

## 🧰 Tech Stack

- **Next.js**: React framework for server-side rendering and static site generation
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **React Icons**: Popular icon library

## 📦 Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/hk-site.git
cd hk-site
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Documentation

The project includes comprehensive documentation to help you understand and extend the website:

- [**GitHub Guide**](./docs/GITHUB_GUIDE.md) - Complete guide for Git setup, GitHub integration, and deployment
- [**Image Guide**](./docs/IMAGE_GUIDE.md) - Detailed instructions for image management and optimization
- [**Services Guide**](./docs/SERVICES.md) - Information about service types and how to customize them

## 🖼️ Adding Images to the Website

For full details on image management, see the [**Image Guide**](./docs/IMAGE_GUIDE.md).

### Image Guidelines

For optimal performance and user experience, follow these guidelines when adding images:

1. **Image Formats**:
   - Use `.jpg` for photographs
   - Use `.png` for images requiring transparency
   - Use `.svg` for icons and logos
   - Use `.webp` for better compression (with jpg fallbacks)

2. **Image Sizing**:
   - Hero/Banner images: 1920×1080px (16:9 ratio)
   - Service cards: 600×400px
   - Team/testimonial photos: 400×400px (1:1 ratio)
   - Blog thumbnails: 800×450px

3. **Optimization**:
   - Compress all images before adding to the project
   - Target file sizes: Large images < 200KB, thumbnails < 50KB
   - Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/) for compression

### Adding Images to the Project

1. Place your images in the appropriate subdirectory of `/public/images/`:
   - `/public/images/services/` - Service-related images
   - `/public/images/team/` - Team member photos
   - `/public/images/blog/` - Blog post images
   - `/public/images/general/》 - General website images

2. Use Next.js Image component for optimal loading:

```jsx
import Image from 'next/image';

<Image
  src="/images/services/cloud-service.jpg"
  alt="Cloud Services"
  width={600}
  height={400}
  className="rounded-lg"
/>
```

3. For background images in CSS:

```jsx
<div 
  className="bg-cover bg-center h-96" 
  style={{ backgroundImage: 'url(/images/general/background.jpg)' }}
/>
```

### Using Image Utilities

The project includes powerful image utilities to help you manage and optimize images:

1. **Single Image Download and Optimization**:
```bash
node src/scripts/downloadImage.js https://example.com/image.jpg public/images/services/cloud-service.jpg --width=600 --height=400
```

2. **Batch Image Processing":
```bash
npm run prepare-images
```

## 📝 Updating to GitHub

For complete details on GitHub integration, see the [**GitHub Guide**](./docs/GITHUB_GUIDE.md).

### Setting Up Git

If you haven't already set up Git in your project:

1. Initialize git repository (if not already done):
```bash
git init
```

2. Configure your git identity:
```bash
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### Creating a Repository on GitHub

1. Go to [GitHub](https://github.com/) and log in to your account
2. Click on the "+" icon in the top right corner and select "New repository"
3. Enter a name for your repository (e.g., "hk-site")
4. Choose if you want the repository to be public or private
5. Do not initialize with README, .gitignore, or license if you already have a local project
6. Click "Create repository"

### Connecting Your Local Project to GitHub

Follow the instructions on the GitHub page after creating the repository, or use these commands:

1. Add your GitHub repository as a remote:
```bash
git remote add origin https://github.com/yourusername/hk-site.git
```

2. Verify the remote was added:
```bash
git remote -v
```

### Making Your First Commit and Push

1. Add all files to staging:
```bash
git add .
```

2. Commit your changes:
```bash
git commit -m "Initial commit"
```

3. Push to GitHub:
```bash
git push -u origin main
# or if you're using 'master' branch
git push -u origin master
```

## 🛠️ Maintenance and Updates

### Updating Dependencies

Regularly update your dependencies to ensure security and performance:

```bash
npm update
# or to check for new major versions
npx npm-check-updates
```

### Running NPM Scripts

The project includes several useful npm scripts to help with development and deployment:

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

# Prepare images (batch processing)
npm run prepare-images

# Export static site
npm run export

# Deploy to Vercel
npm run deploy:vercel

# Deploy to Netlify
npm run deploy:netlify
```

### Customizing Services

For details on how to customize or add new services, see the [**Services Guide**](./docs/SERVICES.md).

### Deployment

This project can be deployed on Vercel, Netlify, or any other Next.js compatible hosting service:

1. **Vercel** (recommended for Next.js):
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect Next.js and configure the build settings

2. **Netlify":
   - Connect your GitHub repository to Netlify
   - Set build command to `npm run build` and publish directory to `out`

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.