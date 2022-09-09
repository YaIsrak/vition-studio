/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pcomp/*.{jsx, js}',
		'./pages/*.{jsx, js}',
		'./pages/**/*.{jsx, js}',
		'./pcomp/**/*.{jsx, js}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
