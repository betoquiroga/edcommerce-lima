/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		extend: {
			maxWidth: {
				256: '78rem',
			},
			width: {
				20: '6rem',
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
