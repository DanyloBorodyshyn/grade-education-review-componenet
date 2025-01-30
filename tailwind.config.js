/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '300px',
        'ms': '359px',
        'ml': '576px',
        'xml': '687px',
        'llg': '1199px',
        'fs': '1366px'
      },
      fontFamily:{
        formular: ['Formular', 'ui-sans-serif', 'system-ui'],
        greenwich: ['Greenwich', 'ui-sans-serif', 'system-ui'],
      },
      colors:{
        black: '#394155',
        grey: '#798595',
        'aqua-green': '#36A8A0'
      }
    },
  },
  plugins: [],
}

