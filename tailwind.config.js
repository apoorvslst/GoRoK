/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#050505',
        surface: '#0E0E0E',
        'surface-elevated': '#121212',
        'surface-card': '#161616',
        offwhite: '#F2F2EE',
        'offwhite-secondary': 'rgba(242, 242, 238, 0.65)',
        'offwhite-muted': 'rgba(242, 242, 238, 0.40)',
        gorok: {
          DEFAULT: '#FF4F00',
          hover: '#FF6A2A',
          dark: '#B83900',
          glow: 'rgba(255, 79, 0, 0.18)',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.10)',
          light: 'rgba(255, 255, 255, 0.16)',
          orange: 'rgba(255, 79, 0, 0.35)',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Space Mono"', '"IBM Plex Mono"', 'monospace'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 79, 0, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 79, 0, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}

