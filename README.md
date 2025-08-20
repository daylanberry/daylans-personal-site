# Daylan Berry - Personal Portfolio

A modern, responsive portfolio website showcasing frontend development skills and experience. Built with React, TypeScript, and Vite for optimal performance and developer experience.

## 🚀 Features

- **Modern Tech Stack**: React 18 + TypeScript + Vite
- **Responsive Design**: Mobile-first approach with smooth animations
- **Interactive Components**: Dynamic navigation, form handling, and skill visualizations
- **Performance Optimized**: Fast loading with modern build tools
- **Accessible**: Semantic HTML and ARIA compliance

## 📋 Sections

- **Hero/About**: Introduction with animated elements
- **Experience**: Professional work history at Caesars Digital
- **Projects**: Featured project (SuChef mobile app)
- **Skills**: Comprehensive technical skills with categorization
- **Contact**: Interactive contact form with multiple contact methods

## 🛠️ Tech Stack

### Frontend

- React 18 with TypeScript
- Modern CSS with Grid and Flexbox
- Lucide React for icons
- CSS Variables for theming

### Development

- Vite for fast development and builds
- ESLint for code quality
- Hot Module Replacement (HMR)

### Skills Showcased

- Frontend: React, TypeScript, JavaScript, Next.js, CSS
- Backend: Node.js, Python, Django, Express
- Databases: PostgreSQL, MySQL, MongoDB, Firebase
- Cloud: AWS EC2, Docker, Kubernetes
- Testing: Jest, Mocha, Chai
- And more...

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd personal-site
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Personal Information

Update the data in `src/data/portfolioData.ts`:

- Personal info (name, bio, contact details)
- Work experience
- Projects
- Skills
- Contact information

### Styling

- Global styles: `src/App.css` and `src/index.css`
- Component styles: Individual CSS files for each component
- Color scheme: Update CSS variables in the root

### Content

- Replace placeholder contact information with your actual details
- Add your own projects and experiences
- Customize the bio and professional summary

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

Ready for deployment to:

- Vercel (recommended for Vite projects)
- Netlify
- GitHub Pages
- Any static hosting service

Build for production:

```bash
npm run build
```

## 📞 Contact

- **Email**: daylanberry@gmail.com (update with actual email)
- **LinkedIn**: [linkedin.com/in/daylanberry](https://linkedin.com/in/daylanberry)
- **GitHub**: [github.com/daylanberry](https://github.com/daylanberry)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

````

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
````
