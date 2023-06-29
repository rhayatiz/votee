/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/Pages/*.jsx',
    'node_modules/@mantine/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  corePlugins: { preflight: false, },
  plugins: [],
}

