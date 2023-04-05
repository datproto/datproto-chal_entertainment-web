/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      'ent': ['Outfit', 'sans-serif']
    },
    extend: {
      colors: {
        'ent': {
          'red': '#FC4747',
          'blue':  {
            'grey': '#5A698F',
            'dark': '#10141E',
            'dark-semi': '#161D2F'
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}

