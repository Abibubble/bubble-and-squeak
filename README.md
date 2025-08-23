# Bubble & Squeak 🎢🔐

[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-green.svg)](https://www.w3.org/WAI/WCAG21/quickref/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)

A fully accessible React/TypeScript web application for reviews and tracking of escape rooms, theme parks, and rides. Built with WCAG 2.1 AA compliance and comprehensive accessibility testing.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Accessibility](#accessibility)
  - [Accessibility Features](#accessibility-features)
  - [Testing Accessibility](#testing-accessibility)
  - [Accessibility Scripts](#accessibility-scripts)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Escape Room Reviews**: Browse escape rooms with detailed ratings for theming, puzzles, games master, value, and fun
- **Theme Park Directory**: Explore theme parks with comprehensive information
- **Ride Database**: Discover thrilling rides with photos and detailed reviews
- **Interactive Navigation**: User-friendly interface with responsive design
- **Photo Gallery**: Visual showcase of escape rooms, parks, and rides
- **Filtering & Sorting**: Find exactly what you're looking for with search functionality
- **Accessibility First**: WCAG 2.1 AA compliant with full keyboard navigation and screen reader support

## 🛠 Tech Stack

- **Frontend**: React with TypeScript
- **Styling**: Styled Components
- **Routing**: React Router DOM
- **Build Tool**: React Scripts (Create React App)
- **Testing**: React Testing Library & Jest
- **Accessibility**: ESLint JSX A11Y, axe-core, Lighthouse
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm
- For accessibility testing: Chrome/Chromium browser (for Lighthouse)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Abibubble/bubble-and-squeak.git
cd bubble-and-squeak
```

2. Install dependencies:

```bash
npm install
```

3. (Optional) Install global accessibility testing tools:

```bash
# For comprehensive accessibility testing
npm install -g @axe-core/cli lighthouse
```

### Running the Application

Start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

## ♿ Accessibility

Bubble & Squeak is built with accessibility as a core principle, ensuring the application is usable by everyone, including users with disabilities.

### 🌟 Accessibility Features

Our application includes comprehensive accessibility features:

- **Skip Navigation**: Keyboard users can skip directly to main content
- **Screen Reader Support**: All interactive elements have proper ARIA labels and descriptions
- **Semantic HTML**: Proper heading hierarchy and semantic elements throughout
- **Keyboard Navigation**: Full keyboard accessibility for all interactive elements
- **Form Accessibility**: All form controls are properly labeled and associated
- **Image Descriptions**: Descriptive alt text for all images
- **Color Contrast**: WCAG 2.1 AA compliant color contrast ratios
- **Focus Management**: Clear focus indicators and logical tab order

### 🧪 Testing Accessibility

We use multiple tools to ensure accessibility compliance:

#### Quick Daily Checks

```bash
# Check for accessibility issues in your code
npm run lint:a11y

# Fix auto-fixable accessibility issues
npm run lint:fix
```

#### Comprehensive Testing

```bash
# 1. Start the development server
npm start

# 2. In a new terminal, run the full accessibility test suite
./test-a11y.sh
```

This will generate detailed reports:

- `eslint-a11y-report.txt` - Code-level accessibility issues
- `lighthouse-a11y-report.json` - Lighthouse accessibility audit
- `axe-*-report.json` - Page-specific accessibility violations
- `accessibility-test-results.md` - Summary of all test results

#### Manual Testing Checklist

- [ ] Tab through the entire application using only keyboard
- [ ] Test with screen reader (VoiceOver on Mac, NVDA on Windows)
- [ ] Verify skip link appears when tabbing
- [ ] Check color contrast with browser dev tools
- [ ] Test on mobile devices with assistive technologies

### 🛠 Accessibility Scripts

| Script                         | Purpose                        | When to Use               |
| ------------------------------ | ------------------------------ | ------------------------- |
| `npm run lint:a11y`            | ESLint accessibility checks    | Before every commit       |
| `./test-a11y.sh`               | Complete accessibility audit   | Weekly or before releases |
| `npm run test:a11y:lighthouse` | Lighthouse accessibility score | Performance reviews       |
| `npm run test:a11y:axe`        | axe-core automated testing     | Continuous integration    |

### 📊 Accessibility Standards

- **WCAG 2.1 Level AA Compliance**: Meeting international accessibility standards
- **Current Accessibility Score**: 8.5-9/10 (Lighthouse)
- **Screen Reader Compatible**: Tested with VoiceOver and NVDA
- **Keyboard Navigation**: 100% keyboard accessible

### 🚨 Reporting Accessibility Issues

If you encounter any accessibility barriers while using this application:

1. **Check existing reports**: Review generated accessibility reports
2. **Use the testing tools**: Run `./test-a11y.sh` to identify issues
3. **Manual testing**: Test with keyboard navigation and screen readers
4. **Create an issue**: Document the barrier and steps to reproduce

### 📚 Accessibility Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [axe-core Documentation](https://github.com/dequelabs/axe-core)
- [React Accessibility Guide](https://reactjs.org/docs/accessibility.html)
- [ESLint JSX A11Y Rules](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Card/           # Card component for displaying items
│   ├── CardsFlex/      # Flexible card container
│   ├── Footer/         # Application footer
│   ├── Header/         # Application header
│   └── ...
├── data/               # Static data files
│   ├── escape-rooms.json
│   ├── parks.json
│   └── rides.json
├── pages/              # Page components
│   ├── EscapeRooms/    # Escape room pages
│   ├── Home/           # Homepage
│   ├── Parks/          # Theme park pages
│   └── Rides/          # Ride pages
├── theme/              # Design system
│   ├── colours.json
│   ├── font.json
│   └── spacing.json
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## 📜 Available Scripts

### Development Scripts

- `npm start` - Start the development server
- `npm run build` - Build the app for production
- `npm test` - Run the test suite
- `npm run types` - Run TypeScript type checking
- `npm run eject` - Eject from Create React App (use with caution)

### Code Quality Scripts

- `npm run lint` - Run ESLint on TypeScript/TSX files
- `npm run lint:fix` - Auto-fix ESLint issues where possible

### Accessibility Scripts

- `npm run lint:a11y` - Run accessibility-focused ESLint checks
- `npm run test:a11y` - Run comprehensive accessibility tests (requires server to be running)
- `npm run test:a11y:lighthouse` - Run Lighthouse accessibility audit
- `npm run test:a11y:axe` - Run axe-core accessibility tests
- `./test-a11y.sh` - Run complete accessibility test suite with reporting

## 🎯 Routes

- `/` - Homepage
- `/escape-rooms` - Escape room directory
- `/escape-rooms/room-info/:roomName` - Individual escape room details
- `/rides` - Ride directory
- `/rides/ride-info/:rideName` - Individual ride details
- `/theme-parks` - Theme park directory
- `/theme-parks/park-info/:parkName` - Individual theme park details
