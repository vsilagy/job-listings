/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['League Spartan', 'ui-sans-serif', 'sans-serif'],
			},
			colors: {
				darkCyan: 'hsl(180, 29%, 50%)',
				lightGrayishCyanBg: 'hsl(180, 52%, 96%)',
				lightGrayishCyanFilter: 'hsl(180, 31%, 95%)',
				darkGrayishCyan: 'hsl(180, 8%, 52%)',
				veryDarkGrayishCyan: 'hsl(180, 14%, 20%)',
			},
		},
	},
	plugins: [],
};
