/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/index.html", "./src/**/*.{html,js,jsx}"],
	theme: {
    screens: {
			sm: "375px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			"p-black": "#151515",
			"p-green": "#4EE1A0",
			"p-dark-grey": "#242424",
			"p-grey": "#D9D9D9",
			"p-white": "#FFFFFF",
		},
		fontFamily: {
			"space-grotesk": ["Space Grotesk"],
		},
		extend: {},
	},
	plugins: [],
};
