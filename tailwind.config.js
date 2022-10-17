/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        scrapeblue: '#90e0ef', 
        scrapepink: '#f79ac0',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
