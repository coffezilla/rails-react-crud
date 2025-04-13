/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
		},
		extend: {
			animation: {
				grow: "grow 2s ease-in-out forwards",
			},
			keyframes: {
				grow: {
					"0%": { height: "0px" },
					"100%": { height: "1000px" },
				},
			},
			fontFamily: {
				sans: ["Montserrat", "sans-serif"], // Set Montserrat as the default sans-serif font
			},
			colors: {
				surface: {
					default: {
						primary: "#1AE598",
						error: "#E51A4D",
						warning: "#FF7300",
						success: "#15B77C",
					},
					lighter: {
						primary: "#76EFC3",
						error: "#EF7694",
						warning: "#FFAB66",
						success: "#76EFC3",
					},
					subtle: {
						primary: "#D1FAEB",
						error: "#FCE8ED",
						warning: "#FFF1E5",
						success: "#E8FCF5",
					},
					darker: {
						primary: "#15B77C",
						error: "#89102E",
						warning: "#994500",
						success: "#10895D",
					},
					black: {
						primary: "#E8E8E8",
						sober: "#BBBBBB",
						darker: "#555555",
					},
				},
				border: {
					default: {
						primary: "#1AE59B",
						error: "#E51A4D",
						warning: "#FF7300",
						success: "#15B77C",
						gray: "#A5A5A5",
					},
					lighter: {
						primary: "#76EFC3",
						error: "#EF7694",
						warning: "#FFAB66",
						success: "#76EFC3",
						grey: "#D2D2D2",
					},
					subtle: {
						primary: "#D1FAEB",
						error: "#FCE8ED",
						warning: "#FFF1E5",
						success: "#E8FCF5",
						grey: "#BBBBBB",
					},
					darker: {
						primary: "#15B77C",
						error: "#89102E",
						warning: "#994500",
						success: "#10895D",
						grey: "#393939",
					},
					black: {
						primary: "#E8E8E8",
						sober: "#BBBBBB",
						darker: "#555555",
					},
				},
				text: {
					default: {
						subtle: "#555555",
						default: "#393939",
						placeholder: "#BBBBBB",
						legend: "#8E8E8E",
						bold: "#1C1C1C",
					},
					colorized: {
						link: "#15B77C",
						primary: "#1AE59B",
						error: "#B7153E",
						warning: "#994500",
						success: "#10895D",
						button: "#0A5C3E",
					},
				},
			},
		},
	},
	plugins: [],
};
