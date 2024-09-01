/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans", "Padauk"],
        roboto: ["Roboto", "Padauk"],
        padauk: ["Padauk", "sans-serif"],
          dancing:[ "Dancing Script"]

      },
    },
  },
  plugins: [],
};

