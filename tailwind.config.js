/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            colors: {
                primary: "#002549",
                secondary: "#00A6FB",
                "primary-gray": "#383838",
                "secondary-blue": "#004385",
            },
        },
        fontFamily: {
            montserrat: ["Montserrat", "sans-serif"],
            roboto: ["Roboto", "sans-serif"],
            lato: ["Lato", "sans-serif"],
            poppins: ["Poppins", "sans-serif"],
        },
    },
    plugins: [],
};
