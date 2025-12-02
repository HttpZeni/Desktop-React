# Desktop Interface Project

This project started as a simple way for me to store and open personal mini-projects inside a desktop-style UI. Instead of a long list of folders or random files, I wanted something visual where each project sits on the “desktop” as its own icon. Clicking an icon opens a small window, making it feel a bit like a tiny operating system for my own work.

## Current Features

- Desktop icons that open their own windows  
- A lightweight window system with a close button  
- A background selector with support for adding your own images  
- LocalStorage saving for custom backgrounds  
- Reusable UI components (icons, buttons, dropdowns)

The project is built with React, TypeScript and Tailwind. The components are intentionally small so I can extend everything easily as the project grows.

## Future Plans

I’m keeping the roadmap simple and practical:

- Drag and drop for desktop icons  
- Saving icon positions so the layout stays consistent  
- Small quality-of-life improvements (better window behavior, cleaner animations)  
- Possibly a basic “folder” system for grouping projects

## Why I'm Building This

I wanted a place where I can quickly drop in little personal projects and access them visually without digging through directories. Building it myself also lets me experiment with UI ideas and keep everything flexible.

## Running the Project

1. Clone the repo  
2. Install dependencies  
3. Start the dev server:

```sh
npm install
npm run dev
