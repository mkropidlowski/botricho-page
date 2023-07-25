/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#4B55C0",
                },
                buttonColor: {
                    DEFAULT: "#4E5945",
                },
                serviceBoxColor: {
                    DEFAULT: "#e8d8c5",
                },
                boxColor: {
                    DEFAULT: "#e7b298",
                },
                buttonHover: {
                    DEFAULT: "#749281",
                },
                secondary: {
                    DEFAULT: "#202945",
                },
                cardColor: {
                    DEFAULT: "#4b55c0",
                },
                footerColor: {
                    DEFAULT: "#3b82f6",
                },
                employeeButton: {
                    DEFAULT: "#DBAC34",
                },
            },
            width: {
                1440: "1440px",
            },
            height: {
                navBarHeight: "70px",
            },
            minHeight: {
                navBarHeight: "70px",
            },
        },
        screens: {
            xxs: "416px",
            xs: "536px",
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            xxl: "1440px",
        },
    },
    plugins: [],
};
