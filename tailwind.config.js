/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  darkMode: 'class', // Enables manual class-based dark mode toggling
  theme: {
    extend: {
      colors: {
        classic: {
          bg: '#0F172A',       // Deep Navy/Slate (Dark)
          card: '#1E293B',     // Medium Slate Card (Dark)
          border: '#334155',   // Subtle Border (Dark)
          accent: '#D97706',   // Classic Warm Amber Gold
          accentHover: '#B45309',
          text: '#F8FAFC',     // Bright Off-White (Dark)
          muted: '#94A3B8',    // Muted Gray (Dark)
          
          // Light Theme Equivalents
          lightBg: '#F8FAFC',
          lightCard: '#FFFFFF',
          lightBorder: '#E2E8F0',
          lightText: '#0F172A',
          lightMuted: '#64748B'
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}