/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/Pages/**/*.jsx',
    './resources/js/components/**/*.jsx',
    'node_modules/@mantine/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  corePlugins: { preflight: false, },
  plugins: [],
}

