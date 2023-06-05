/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",,
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite-react/**/*.jsx",
    "./node_modules/flowbite-react/**/*.ts",
    "./node_modules/flowbite-react/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        'indianRed': '#E5625E',
        'savoyBlue': '#425FB6',
        'black': '#070707',
        'platinum': '#E6E6E6',
        'jet': '#39393A',
        'dodgerBlue': '#0496FF',
        'eerieBlack': '#1F2224',
        'seaSalt': '#F8F8F8',
        'onyx': '#353A3D',
        'outerSpace': '#4A5358'
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

