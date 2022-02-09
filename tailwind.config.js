module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../src/images/vegetables-set-left-black-slate.jpg')",
      },
      fontFamily: {
        'cabin': ['Cabin', 'sans-serif'],
        'cabinSketch': ['"Cabin Sketch"', 'cursive'],
        'neon': ['Neonderthaw', 'cursive'],
        'indie': ['"Indie Flower"', 'cursive'],
        'gloria': ['Gloria Hallelujah', 'cursive'],
        'festive': ['Festive', 'cursive'],
      },
      boxShadow: {
        'heroTitle': '4px 4px 1px yellow',
      }
    },
  },
  plugins: [],
}
