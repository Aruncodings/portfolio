# M. Arun Kumar - Professional Portfolio

A modern, responsive portfolio website showcasing M. Arun Kumar's software development expertise, projects, and professional experience. Built with React, TypeScript, and Tailwind CSS with dark mode support and PDF export functionality.

## 🌟 Features

- **Modern Dark Theme**: Professional dark mode design with cyan accent colors
- **PDF Export**: Download the entire portfolio as a PDF resume
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Professional Sections**: Complete portfolio with all essential sections
- **Theme Toggle**: Switch between light and dark modes
- **Contact Form**: Functional contact form for inquiries

## 🚀 Live Demo

Visit the live portfolio: [M. Arun Kumar Portfolio](https://bit.ly/arunkumar_portfolio)

## 📱 Sections

### Hero Section
- Professional introduction with contact information
- Call-to-action buttons for resume download and social links
- Professional avatar with gradient design

### Professional Summary
- Comprehensive overview of skills and expertise
- Focus on Python development and problem-solving abilities

### Experience
- Timeline layout showcasing professional experience
- Current role at Uniq Technologies as Backend Python Developer Intern
- Previous internship at ABI Tech Solutions

### Projects
- Featured projects with detailed descriptions
- Smart Healthcare System with ML integration
- Image-to-OCR Voice Toolkit for accessibility

### Education
- Academic background in AI & Data Science
- Timeline format with CGPA information

### Skills & Technologies
- Categorized skill sets with modern card layouts
- Web development, backend technologies, databases, and tools
- Soft skills and language proficiencies

### Contact
- Contact form with validation
- Direct contact information
- Social media links

## 🛠️ Built With

- **React 18** - Modern React with hooks and TypeScript
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework with dark mode
- **Framer Motion** - Smooth animations and transitions
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful, customizable icons
- **html2canvas & jsPDF** - PDF export functionality

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Aruncodings/portfolio.git
cd portfolio
```

2. Install dependencies:
```bashnp
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📦 Building for Production

1. Build the project:
```bash
npm run build
```

2. Preview the production build:
```bash
npm run preview
```

The built files will be in the `dist` directory, ready for deployment.

## 🌐 Deployment

### GitHub Pages

1. Install the GitHub Pages deployment package:
```bash
npm install --save-dev gh-pages
```

2. Add deployment scripts to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/portfolio"
}
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

### Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

Or connect your GitHub repository to Netlify for automatic deployments.

### Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

## 🎨 Customization

### Theme Colors

The portfolio uses a cyan-based color scheme. You can customize colors in `tailwind.config.js`:

```javascript
colors: {
  cyan: {
    // Custom cyan color palette
  },
}
```

### Content Updates

Update personal information in the respective component files:

- `src/components/Hero.tsx` - Personal information and contact details
- `src/components/Experience.tsx` - Professional experience
- `src/components/Projects.tsx` - Project showcase
- `src/components/Education.tsx` - Educational background
- `src/components/Skills.tsx` - Technical skills and tools

### PDF Export

The PDF export feature captures the entire portfolio layout. The styling is optimized for both web viewing and PDF generation.

## 📄 Features

### Dark Mode Support
- Default dark theme with professional appearance
- Toggle between light and dark modes
- Consistent styling across all components

### PDF Export
- One-click PDF generation of the entire portfolio
- Maintains layout and styling in PDF format
- Perfect for offline resume sharing

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly navigation

### Performance
- Fast loading with Vite
- Optimized images and assets
- Smooth animations without performance impact

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Aruncodings/portfolio/issues).

## 📞 Contact

M. Arun Kumar - [arunkumaraiandds@gmail.com](mailto:arunkumaraiandds@gmail.com)

- LinkedIn: [linkedin.com/in/arunkumar-mahendiran](https://linkedin.com/in/arunkumar-mahendiran)
- GitHub: [github.com/Aruncodings](https://github.com/Aruncodings)
- Portfolio: [bit.ly/arunkumar_portfolio](https://bit.ly/arunkumar_portfolio)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ Star this repository if you found it helpful!