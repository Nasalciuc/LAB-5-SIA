# LAB 5 SIA

A full-stack web application built with React (TSX) and TypeScript.

## Project Structure

```
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/         # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Services.tsx
│   │   ├── App.tsx        # Main App component
│   │   ├── main.tsx       # Entry point
│   │   └── index.css      # Global styles
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── index.html
├── server/                # Backend application
│   ├── index.ts          # Main server file
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## Features

- **Frontend**: React with TypeScript, Vite for fast development
- **Pages**: Home, About, Contact, Services
- **Components**: Navbar and Footer navigation
- **Backend**: TypeScript server

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Nasalciuc/LAB-5-SIA.git
cd "Lab 5 site"
```

2. Install client dependencies:
```bash
cd client
npm install
```

3. Install server dependencies:
```bash
cd ../server
npm install
```

### Running the Application

**Client (Frontend)**:
```bash
cd client
npm run dev
```

**Server (Backend)**:
```bash
cd server
npm start
```

## Technologies Used

- **Frontend**: React, TypeScript, Vite
- **Backend**: Node.js, TypeScript
- **Styling**: CSS

## License

This project is part of LAB 5 SIA course work.
