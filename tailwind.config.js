/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
    theme: {

        extend: {
            fontFamily: {
              satoshi: ['Satoshi', 'sans-serif'],
              inter: ['Inter', 'sans-serif'],
            },
            fontSize: {
                sm: '0.8rem',
                base: '1rem',
                xl: '1.15rem',
                '2xl': '1.563rem',
                '3xl': '1.953rem',
                '4xl': '2.441rem',
                '5xl': '3.052rem',
                '6xl': '4rem',
                '7xl': '5rem',
              },
              colors :{
                "tealish-blue" : "#3B4F7D",
              }
          },
        },
    plugins: [
        require('flowbite/plugin')
    ],
  }