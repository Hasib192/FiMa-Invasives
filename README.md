# FiMa Invasives Website

This is built with **React, TypeScript, Vite, and Tailwind CSS**.

## Requirements

- [Node.js](https://nodejs.org/) and npm

## Getting Started

After cloning the project, Install dependencies:

```bash
npm install
```

Run:

```bash
npm run dev
```

Open the local URL displayed in the terminal.


### Production Preview

First, build the project:

```bash
npm run build
```

Then preview the production build:

```bash
npm run preview
```

Open the local URL displayed in the terminal. Run the build again whenever you want to preview your latest changes.

## Project Structure

```text
src/
├── assets/     # Images and logos
├── App.tsx     # Website content and components
├── index.css   # Styling
└── main.tsx    # React entry point

index.html      # Page metadata
vite.config.ts  # Vite configuration
dist/           # Production build output
```

## Deployment to cPanel

1. Run `npm run build`.
2. Open the generated `dist/` folder.
3. Upload its **contents** to your domain's `public_html` directory in cPanel.

**Note:** Edit source files in `src/`, not generated files in `dist/`.

## Available Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check code quality |