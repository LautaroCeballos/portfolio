module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('media/images/hero-bg.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-filter-utilities')
  ],
}
