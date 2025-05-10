# Portfolio Website

A professional portfolio website built with HTML, Tailwind CSS, and JavaScript.

## Features

- Responsive design for all devices
- Dark mode support
- Bilingual support (English/Bengali)
- Interactive animations
- Particles.js background
- Project showcase
- Certificates carousel
- Contact form with EmailJS

## Setup

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

### Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```
npm install
```

3. Build CSS:
```
npm run build
```

### Development

To watch for CSS changes during development:
```
npm run watch
```

## Structure

- `index.html` - Main HTML file
- `assets/css/input.css` - Source Tailwind CSS file
- `assets/css/style.css` - Compiled CSS (don't edit directly)
- `assets/js/` - JavaScript files
- `assets/img/` - Images and media files

## Deployment

For production, build the optimized CSS:
```
npm run build
```

Then deploy the following files to your hosting server:
- `index.html`
- `assets/` directory
- `favicon.ico`

## Customization

- Edit content in `index.html`
- Modify styles in `assets/css/input.css`
- Add translations in `assets/js/translations.js`
- Configure animations in `assets/js/animations.js`
- Update particles configuration in `assets/js/config.js`

## License

MIT
