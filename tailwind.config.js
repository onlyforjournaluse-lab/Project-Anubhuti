/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        risk: {
          low: '#10b981',
          'low-bg': '#ecfdf5',
          'low-border': '#6ee7b7',
          moderate: '#f59e0b',
          'moderate-bg': '#fffbeb',
          'moderate-border': '#fcd34d',
          high: '#ea580c',
          'high-bg': '#fff7ed',
          'high-border': '#fdba74',
          severe: '#dc2626',
          'severe-bg': '#fef2f2',
          'severe-border': '#fca5a5',
        },
        navy: {
          850: '#111827',
          900: '#0f172a',
          950: '#020617',
        },
        meteo: {
          blue: '#0284c7',
          cyan: '#06b6d4',
          amber: '#d97706',
          radar: '#10b981',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      }
    },
  },
  plugins: [],
}
