/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "dark-surface": "var(--dark-surface)",
        "dark-on-surface": "var(--dark-on-surface)",
        "dark-primary": "var(--dark-primary)",
        "dark-accent": "var(--dark-accent)",
        "dark-secondary": "var(--dark-secondary)",
        "background-start": "var(--background-start)",
        "background-end": "var(--background-end)",
        "primary-accent": "var(--primary-accent)",
        "dark-accent-highlight": "var(--dark-accent-highlight)",
        "error-color": "var(--error-color)",
      },
      transitionProperty: {
        width: 'width',
        spacing: 'margin, padding',
      },
      keyframes: {
        'slide-in': {
          '0%': {
            transform: 'translateX(33vw)',
          },
          '100%': {
            transform: 'translateX(0vw)',
          },
        },
        'slide-out': {
          '0%': {
            opacity: '1',
            transform: 'translateX(0vw)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(33vw)',
          },
        },

        'slide-fwd': {
          '0%': {
            '-webkit-transform': 'translateZ(0px)',
            transform: 'translateZ(0px)',
          },
          '100%': {
            '-webkit-transform': 'translateZ(160px)',
            transform: 'translateZ(160px)',
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.3s ease-out',
        'slide-fwd': 'slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-out': 'slide-out 0.3s ease-out',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
