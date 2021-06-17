module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,jsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Oswald', 'Calibri', 'Arial'],
    },
    colors: {
      gray: {
        light: 'var(--light-gray)',
        DEFAULT: 'var(--gray)',
        dark: 'var(--dark-gray)',
      },
      green: {
        light: 'var(--light-green)',
        dark: 'var(--dark-green)',
      },
    },
  },
};
