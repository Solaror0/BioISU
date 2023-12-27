/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./api/templates/**/*.html",
  "./api/static/src/**/*.js",
  "./api/static/js/**/*.js"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeDown: {
          '0%': { transform: 'translateY(10%)', opacity: '0'},
          '100%': { transform: 'translateY(0%)', opacity: '1'},
        },
        fadeRight: {
          '0%': { transform: 'translateX(10%)', opacity: '0'},
          '100%': { transform: 'translateX(0%)', opacity: '1'},
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeDown: 'fadeDown 1s ease-in forwards',
        fadeRight: 'fadeRight 1s ease-in forwards',
      },
      fontFamily: {
        pixel: ['Pixelify Sans','mono']
      }


    },
  },
  plugins: [],
}

