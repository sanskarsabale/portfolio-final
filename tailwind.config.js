/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        bg: '#080c10',
        surface: '#0d1117',
        border: '#1e2d3d',
        accent: '#00ff9d',
        accentDim: '#00cc7d',
        accentGlow: 'rgba(0,255,157,0.15)',
        muted: '#4a6175',
        text: '#c9d1d9',
        bright: '#e6edf3',
      },
      boxShadow: {
        glow: '0 0 20px rgba(0,255,157,0.3)',
        glowSm: '0 0 10px rgba(0,255,157,0.2)',
        glowLg: '0 0 40px rgba(0,255,157,0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        blink: 'blink 1s step-end infinite',
        'scan-line': 'scanLine 8s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { from: { opacity: 0, transform: 'translateY(20px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        blink: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
        scanLine: { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(100vh)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
      },
    },
  },
  plugins: [],
}
