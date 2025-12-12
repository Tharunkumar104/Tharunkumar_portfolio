# Tharunkumar D - Portfolio Website

A modern, responsive portfolio website built with React and CSS Modules. Features a dark theme with gold and purple accents, smooth animations, and full light/dark theme support.

## Features

- 🌙 **Dark/Light Theme Toggle** - Persists in localStorage
- 📱 **Fully Responsive** - Mobile-first design with graceful scaling
- ♿ **Accessible** - Semantic HTML, ARIA labels, keyboard navigation
- 🎨 **CSS Modules** - Scoped styling with CSS variables
- ⚡ **Smooth Animations** - Fade-in, slide, and hover effects
- 📝 **Contact Form** - Email validation with mailto fallback

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Replacing Your Photo

Replace the placeholder profile photo at:
```
public/myphoto.jpg
```

Recommended image specifications:
- **Size**: 400x400px minimum (square recommended)
- **Format**: JPG, PNG, or WebP
- **Quality**: High resolution for retina displays

## Customizing Colors

All theme colors are defined as CSS variables in `src/index.css`:

```css
:root {
  --bg: #0f0f10;              /* Page background */
  --panel: #0b0b0c;           /* Cards/panels */
  --text: #e8e6e3;            /* Main text */
  --muted: #9aa3a9;           /* Muted text */
  --accent-gold: #c89b4a;     /* Primary gold accent */
  --accent-purple: #8a63ff;   /* Secondary purple accent */
}
```

## Customizing Content

### Personal Information
Edit the following files to update your details:
- `src/components/Hero/Hero.tsx` - Name, title, description
- `src/components/About/About.tsx` - Bio, education, stats
- `src/components/Contact/Contact.tsx` - Email, social links

### Skills
Edit `src/components/Skills/Skills.tsx` to update:
- `hardwareSkills` array
- `softwareSkills` array

### Projects
Edit `src/components/Projects/Projects.tsx` to update:
- `projects` array with your project details

### Achievements
Edit `src/components/Achievements/Achievements.tsx` to update:
- `achievements` array

### Social Links
Update social URLs in:
- `src/components/Hero/Hero.tsx`
- `src/components/Contact/Contact.tsx`
- `src/components/Footer/Footer.tsx`

## Project Structure

```
src/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Skills/
│   ├── Projects/
│   ├── Achievements/
│   ├── Contact/
│   └── Footer/
├── context/
│   └── ThemeContext.tsx
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
└── index.css
```

## Technologies

- React 18
- TypeScript
- CSS Modules
- React Router
- Vite

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Feel free to use this template for your own portfolio!
