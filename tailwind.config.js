/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#222831',
        light: '#ffffff',
        bg_color: '#f1f5f9',
        dark_blue: '#2B3467',
        light_blue: '#576CBC',
        red: '#E84545',
      },
    },
  },
  plugins: [],
};
