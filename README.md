# Desktop Interface Project

This is a small personal project where I'm experimenting with a desktop-style UI inside the browser. The goal is to recreate the feeling of a lightweight operating system: clickable icons, pop-up windows, customizable backgrounds and a few simple tools.

## Current Features

- Desktop icons that open their own windows  
- A basic window system with a close button  
- Background switching via a dropdown menu  
- The option to add custom background images through a URL  
- LocalStorage support so your backgrounds stay saved  

The project is built with React, TypeScript and Tailwind. Most components like `DesktopIcon`, `Button`, and `Dropdown` are kept small and reusable so I can extend the whole thing more easily later.

## Plans and Ideas

- A taskbar with minimize/maximize window behavior  
- Draggable desktop icons with saved positions  
- Right-click context menus  
- More “apps” inside windows (notes, image viewer, settings, etc.)  
- Folder-like structures or nested icons  

## Why I'm Building This

Mainly for fun and to challenge myself. I wanted a sandbox where I can try out UI ideas and play around with state management without worrying too much about strict architecture. It turned into a surprisingly good exercise for organizing components and experimenting with different patterns.

## Running the Project

1. Clone the repo  
2. Install dependencies  
3. Start the dev server

```sh
npm install
npm run dev
