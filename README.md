# Deep Coaching Centre - Frontend Website

A modern, responsive website for Deep Coaching Centre built with React, TypeScript, and Vite.

## Features

- **Pure Frontend**: No backend dependencies - runs entirely in the browser
- **Client-Side Routing**: Fast navigation with TanStack Router
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Stack**: React 19, TypeScript, Vite for optimal performance

## Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Routing**: TanStack Router (client-side)
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The development server will start at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

This is a static site that can be deployed to any static hosting service:

- **Vercel**: Automatic deployment from GitHub
- **Netlify**: Drag & drop or Git integration
- **GitHub Pages**: Manual deployment
- **AWS S3 + CloudFront**: For scalable hosting

## Project Structure

```
src/
├── components/     # Reusable UI components
├── routes/         # Page routes with TanStack Router
├── styles/         # Global styles and Tailwind config
├── main.tsx        # Application entry point
└── router.tsx      # Router configuration
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
