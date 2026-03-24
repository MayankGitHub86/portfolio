/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
        sans:    ['Inter', 'sans-serif'],        // override Tailwind default
      },
      fontSize: {
        // Hero name: 64-96px
        'hero':    ['clamp(3.5rem, 8vw, 6rem)', { lineHeight: '1.05', fontWeight: '800' }],
        // Section titles: 48-60px
        'section': ['clamp(2.5rem, 5vw, 3.75rem)', { lineHeight: '1.1', fontWeight: '700' }],
        // Subsection: 24-36px
        'sub':     ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
}
