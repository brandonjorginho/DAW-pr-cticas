/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        neon: 'neon 1.5s infinite',
      },
      keyframes: {
        neon: {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 10px #9EC8B9)',
          },
          '50%': {
            filter: 'drop-shadow(0 0 5px #9EC8B9)',
          },
        },
      },
    },
  
},
  plugins: [],
}

