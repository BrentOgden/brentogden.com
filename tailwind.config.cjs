// tailwind.config.cjs
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#0185e4',    // B Squared primary blue
        brandAlt: '#3d86ca', // B Squared secondary blue
      },
    },
  },
  plugins: [],
}
