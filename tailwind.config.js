module.exports = {
  purge: ['./index.html', './src/**/*.{js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      placeholderColor: ['hover'],
      backgroundImage: ['checked'],
      ringWidth: ['checked', 'hover'],
      backgroundColor: ['checked'],
      opacity: ['disabled'],
      pointerEvents: ['disabled']
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
