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
        'great': ["'Great Vibes'", 'cursive']
      },
      boxShadow: {
        'heroTitle': '4px 4px 1px yellow',
        'contactIconShadow': '0px 0px 20px yellow',
      },
      colors: {
        'c-green': "#2a4835"
      }
    },
  },
  plugins: [],
}
