/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Hauptfarbe: Düsteres Neon-Lila (Cyberpunk-Style)
        primary: {
          50: '#1a0b2e',   // Sehr dunkel
          100: '#2d1650',  // Dunkel
          200: '#3f1f72',  // Mittel-dunkel
          300: '#522a94',  // Mittel
          400: '#6938b6',  // Heller werdend
          500: '#8b4ad8',  // Standard - Neon Lila
          600: '#a15fe6',  // Hell
          700: '#b77df0',  // Heller
          800: '#cd9ff5',  // Sehr hell
          900: '#e3c4fa',  // Pastell
          950: '#f5e8ff',  // Extremhell
        },
        
        // Sekundärfarbe: Giftgrün/Neon-Grün (Matrix-Style)
        secondary: {
          50: '#0a1f0f',   // Sehr dunkel
          100: '#0f2e17',  // Dunkel  
          200: '#144020',  // Mittel-dunkel
          300: '#1a5329',  // Mittel
          400: '#1f6732',  // Heller werdend
          500: '#00ff41',  // Standard - Neon Grün
          600: '#33ff66',  // Hell
          700: '#66ff8a',  // Heller
          800: '#99ffad',  // Sehr hell
          900: '#ccffd1',  // Pastell
          950: '#e6fff0',  // Extremhell
        },
        
        // Akzentfarbe: Glühendes Cyan/Electric Blue
        accent: {
          50: '#0a1520',   // Sehr dunkel
          100: '#0f1f2e',  // Dunkel
          200: '#142a3d',  // Mittel-dunkel
          300: '#19364b',  // Mittel
          400: '#1e415a',  // Heller werdend
          500: '#00d9ff',  // Standard - Electric Cyan
          600: '#33e1ff',  // Hell
          700: '#66e9ff',  // Heller
          800: '#99f0ff',  // Sehr hell
          900: '#ccf8ff',  // Pastell
          950: '#e6fcff',  // Extremhell
        },
        
        // Danger: Blutrot/Neon-Rot
        danger: {
          50: '#1f0a0a',   // Sehr dunkel
          100: '#2e0f0f',  // Dunkel
          200: '#401414',  // Mittel-dunkel
          300: '#531a1a',  // Mittel
          400: '#671f1f',  // Heller werdend
          500: '#ff0055',  // Standard - Neon Rot
          600: '#ff3377',  // Hell
          700: '#ff6699',  // Heller
          800: '#ff99bb',  // Sehr hell
          900: '#ffccdd',  // Pastell
          950: '#ffe6ee',  // Extremhell
        },
        
        // Warnung: Giftgelb/Radioaktiv
        warning: {
          50: '#1f1a0a',   // Sehr dunkel
          100: '#2e250f',  // Dunkel
          200: '#403114',  // Mittel-dunkel
          300: '#533d1a',  // Mittel
          400: '#67491f',  // Heller werdend
          500: '#ffdd00',  // Standard - Radioaktiv Gelb
          600: '#ffe433',  // Hell
          700: '#ffeb66',  // Heller
          800: '#fff299',  // Sehr hell
          900: '#fff8cc',  // Pastell
          950: '#fffce6',  // Extremhell
        },
        
        // Neutrale Farben: Düstere Grautöne mit leicht bläulichem Stich
        dark: {
          50: '#0a0b0e',   // Fast schwarz
          100: '#11131a',  // Sehr dunkel
          200: '#181b26',  // Dunkel
          300: '#1f2433',  // Mittel-dunkel
          400: '#262c3f',  // Mittel
          500: '#2d344c',  // Leicht heller
          600: '#3d4563',  // Heller
          700: '#4d5679',  // Noch heller
          800: '#6d7599',  // Hell
          900: '#8d94b3',  // Sehr hell
          950: '#adb3cc',  // Extremhell
        },
        
        // Background: Tiefes Schwarz mit Variationen
        background: {
          primary: '#0a0a0f',    // Haupthintergrund
          secondary: '#11131a',  // Cards, Panels
          tertiary: '#181b26',   // Hover states
          elevated: '#1f2433',   // Modals, Dialogs
        },
        
        // Text: Für gute Lesbarkeit auf dunklem Grund
        text: {
          primary: '#e8eaf0',    // Haupttext
          secondary: '#adb3cc',  // Sekundärtext
          muted: '#6d7599',      // Subtiler Text
          disabled: '#3d4563',   // Deaktiviert
        },
        
        // Border: Subtile Grenzen
        border: {
          primary: '#262c3f',    // Standard Border
          secondary: '#1f2433',  // Subtiler
          accent: '#3d4563',     // Hervorgehoben
        },
      },
      
      boxShadow: {
        // Depth Shadows: realistische UI-Tiefe
        "depth-sm": `
          0 1px 2px rgba(0, 0, 0, 0.15),
          0 2px 4px rgba(0, 0, 0, 0.12)
        `,
        "depth-md": `
          0 2px 4px rgba(0, 0, 0, 0.18),
          0 4px 12px rgba(0, 0, 0, 0.16)
        `,
        "depth-lg": `
          0 4px 8px rgba(0, 0, 0, 0.22),
          0 8px 24px rgba(0, 0, 0, 0.20)
        `,
        "depth-xl": `
          0 8px 16px rgba(0, 0, 0, 0.25),
          0 12px 40px rgba(0, 0, 0, 0.22)
        `,

        "glow-sm": `
          0 0 4px rgba(255, 255, 255, 0.25),
          0 0 8px rgba(255, 255, 255, 0.15)
        `,
        "glow-md": `
          0 0 6px rgba(255, 255, 255, 0.28),
          0 0 14px rgba(255, 255, 255, 0.18),
          0 0 22px rgba(255, 255, 255, 0.10)
        `,
        "glow-lg": `
          0 0 8px rgba(255, 255, 255, 0.32),
          0 0 18px rgba(255, 255, 255, 0.20),
          0 0 30px rgba(255, 255, 255, 0.12),
          0 0 45px rgba(255, 255, 255, 0.08)
        `,
        "glow-xl": `
          0 0 10px rgba(255, 255, 255, 0.38),
          0 0 22px rgba(255, 255, 255, 0.25),
          0 0 40px rgba(255, 255, 255, 0.16),
          0 0 70px rgba(255, 255, 255, 0.10)
        `,
      },
      
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom, #0a0a0f, #11131a)',
        'gradient-primary': 'linear-gradient(135deg, #8b4ad8, #a15fe6)',
        'gradient-secondary': 'linear-gradient(135deg, #00ff41, #33ff66)',
        'gradient-accent': 'linear-gradient(135deg, #00d9ff, #33e1ff)',
        'gradient-cyber': 'linear-gradient(135deg, #8b4ad8, #00ff41, #00d9ff)',
        'grid-dark': 'linear-gradient(rgba(139, 74, 216, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 74, 216, 0.1) 1px, transparent 1px)',
      },
      
      backgroundSize: {
        'grid': '40px 40px',
      },
      
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flicker': 'flicker 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '1',
            boxShadow: '0 0 20px rgba(139, 74, 216, 0.6)'
          },
          '50%': { 
            opacity: '.8',
            boxShadow: '0 0 40px rgba(139, 74, 216, 0.9)'
          },
        },
        'flicker': {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0.7' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}