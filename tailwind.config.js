/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        diffWhite: "#F3F7EC",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        achieve: "url('../../public/img/achieve.jpg')",
        success: "url('../../public/img/success.jpg')",
        organize: "url('../../public/img/organize.jpg')",
      },
      backgroundColor: {
        vision: "rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
