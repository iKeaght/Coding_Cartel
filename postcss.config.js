module.exports = {
  plugins: {
    // Default NextJS configuration
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
    // End default
    'tailwindcss': {},
    'autoprefixer': {},
    'postcss-nested': {},
  },
};
