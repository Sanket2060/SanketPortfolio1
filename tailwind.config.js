/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        smallmobile: "400px", // Adds a custom screen size
      },
      animation: {
        fall: "fallEffect 0.6s ease-out forwards", // Add the fall animation
      },
      keyframes: {
        fallEffect: {
          "0%": {
            opacity: 0,
            transform: "translateY(-20px)", // Start slightly above
          },
          "80%": {
            opacity: 1,
            transform: "translateY(10px)", // Drop effect
          },
          "100%": {
            transform: "translateY(0)", // End at normal position
          },
        },
      },
    },
  },
  plugins: [],
};
