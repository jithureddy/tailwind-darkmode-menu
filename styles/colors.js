const defaultThemeColors = require('tailwindcss/colors')


const explicitColors = {
	amber: defaultThemeColors.amber,
	blue: defaultThemeColors.blue,
	cyan: defaultThemeColors.cyan,
	emerald: defaultThemeColors.emerald,
	fuchsia: defaultThemeColors.fuchsia,
	gray: defaultThemeColors.gray,
	indigo: defaultThemeColors.indigo,
	lime: defaultThemeColors.lime,
	neutal: defaultThemeColors.neutral,
	orange: defaultThemeColors.orange,
	pink: defaultThemeColors.pink,
	red: defaultThemeColors.red,
	rose: defaultThemeColors.rose,
	slate: defaultThemeColors.slate,
	sky: defaultThemeColors.sky,
	stone: defaultThemeColors.stone,
	teal: defaultThemeColors.teal,
	violet: defaultThemeColors.violet,
}


const colors = {
	...explicitColors,
	black: defaultThemeColors.black,
	pageBgColor: '#F3F4F6',
	primary: {
		50: '#ECF9F8',
		100: '#D9F2F0',
		200: '#B3E5E1',
		300: '#85D6D0',
		400: '#57C1B9',
		500: '#3AACA3',
		600: '#2D867F',
		700: '#20605A',
		800: '#174541',
		900: '#133936',
	},
	transparent: 'transparent',
	white: defaultThemeColors.white,
}

module.exports = colors
