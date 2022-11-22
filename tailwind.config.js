/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				primary: "#ffe284",
				"primary-dark": "#dcb240",
				"primary-dark-500": "#f2dfa1",
				"primary-light": "#fff0a7",
				secondary: "#5d86ff",
				"secondary-light": "#91aeff",
				"secondary-dark": "#184390",
				accent: "#f6e3f2",
				"accent-dark": "#d860a6",
			},
		},
	},
	plugins: [require("tailwindcss-textshadow")],
};
