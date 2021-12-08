module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      lato: ['Lato', 'sans-serif']
    },
    extend: {
      backgroundColor: theme => ({
        'primary': '#FF0000',
        'onPrimary': '#ED635E',
        }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
