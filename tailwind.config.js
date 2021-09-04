module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px"
      }
    },
    extend: {
      keyframes: {
        loadAnimaton: {
          '0%': { width: "min-content" },
          '100%': {width: '100vw'}
        }
      },
      animation: {
        loadAnimation: 'loadAnimation 2s ease--in-out'
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
