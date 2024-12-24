/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'heroSocialMedia': "url('../src/assets/img/bg-socialmedia.jpg')",
        'heroMain': "url('/src/assets/img/desktop-2-148eae59.png')",
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein300: "slidein 1s ease 300ms forwards",
        slidein500: "slidein 1s ease 500ms forwards",
        slidein700: "slidein 1s ease 700ms forwards",
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
      },
    },
  },
  plugins: [],
}

