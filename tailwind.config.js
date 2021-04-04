module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				headerBgLg: "url('/headerBLg.png')",
			}),
			zIndex: {
				'-10': '-10',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
