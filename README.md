# Bubble & Squeak 🎢🔐

_Escapes and Thrills_

A React/TypeScript web application for reviews and tracking of escape rooms, theme parks, and rides.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
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

## 🛠 Tech Stack

- **Frontend**: React with TypeScript
- **Styling**: Styled Components
- **Routing**: React Router DOM
- **Build Tool**: React Scripts (Create React App)
- **Testing**: React Testing Library & Jest
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm

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

### Running the Application

Start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

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

- `npm start` - Start the development server
- `npm run build` - Build the app for production
- `npm test` - Run the test suite
- `npm run types` - Run TypeScript type checking
- `npm run eject` - Eject from Create React App (use with caution)

## 🎯 Routes

- `/` - Homepage
- `/escape-rooms` - Escape room directory
- `/escape-rooms/room-info/:roomName` - Individual escape room details
- `/rides` - Ride directory
- `/rides/ride-info/:rideName` - Individual ride details
- `/theme-parks` - Theme park directory
- `/theme-parks/park-info/:parkName` - Individual theme park details

## 👤 Author

Abi Harrison-Nye
