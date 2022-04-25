const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, "pages/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "components/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "layouts/**/*.{js,ts,jsx,tsx}"),
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
  
}
