import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: '#7D9B76',
        'sage-light': '#E8F0E6',
        cream: '#FFF5EB',
        terracotta: '#C4856A',
        forest: '#2D4A3E',
        'glass-bg': 'rgba(255,245,235,0.7)',
        'glass-border': 'rgba(125,155,118,0.2)',
      },
      fontFamily: {
        serif: ['DM Serif Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
