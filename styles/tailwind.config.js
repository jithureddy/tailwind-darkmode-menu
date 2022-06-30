/** @type {import('tailwindcss').Config} */
const uiConfig = require('./theme-config')

module.exports = uiConfig({
	darkMode: 'class',
    plugins: [],
    content: ['./.storybook/decorator.tsx'],
    theme: {
        extend: {},
    },
    variants: {},
})
