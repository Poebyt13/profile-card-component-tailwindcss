/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "hsl(185, 75%, 39%)",
        "primary-very-dark": "hsl(229, 23%, 23%)",
        "primary-dark-grawish-blue": "hsl(227, 10%, 46%)",
        "neutral-dark-gray": "hsl(0, 0%, 59%)",
      },
      backgroundColor: {
        "primary-dark": "hsl(185, 75%, 39%)",
        "primary-very-dark": "hsl(229, 23%, 23%)",
        "primary-dark-grawish-blue": "hsl(227, 10%, 46%)",
        "neutral-dark-gray": "hsl(0, 0%, 59%)",
      },
      backgroundImage: {
        'hero-top': "url('../assets/bg-pattern-top.svg')",
        'hero-bottom': "url(../assets/bg-pattern-bottom.svg)",
      }
    },
  },
  plugins: [],
}
