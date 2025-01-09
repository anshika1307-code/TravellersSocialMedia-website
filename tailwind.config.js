/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rating-gradient': 'linear-gradient(to right, #FFDBD5, #ff006e)', // Example gradient from teal to blue
      }
    },
  },
  plugins: [],
}

