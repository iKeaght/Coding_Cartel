module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Oswald', 'Calibri', 'Arial'],
    },
    extend: {
      colors: {
        gray: {
          light: 'var(--light-gray)',
          DEFAULT: 'var(--gray)',
          dark: 'var(--dark-gray)',
        },
        green: {
          lighter: 'var(--lighter-green)',
          light: 'var(--light-green)',
          dark: 'var(--dark-green)',
        },
      },
    },
    variants: {
      extend: {
        fontSize: ['hover', 'focus'],
      },
    },
  },
};
