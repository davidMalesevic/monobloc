module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["sofia-pro, sans-serif"],
      mono: ["mono45-headline, monospace; "],
    },
    extend: {
      textDecoration: ["active"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
