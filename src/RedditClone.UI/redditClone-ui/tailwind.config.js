/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          text: {
            dark: '#D7DADC',
            light: '#1c1c1c'
          },
          bg: {
            dark: '#1A1A1B',
            light: '#ffffff'
          },
          highlight: {
            dark: '#303030',
            light: '#e7e7e7',
          }
        },
        secondary: {
          dark: '#343536',
          light: '#edeff1',
          text: {
            dark: '#818384',
            light: 'TOUSE'
          }
        },
        tertiary: {
          dark: 'TOUSE',
          light: 'TOUSE',
          bg: {
            dark: '#272729',
            light: '#f6f7f8'
          }
        },
        accent: {
          orange: '#d93a00',
          blue: '#0079d3'
        }
      }
    },
  },
  plugins: [],
}

