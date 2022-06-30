/** @type {import('tailwindcss').Config} */
const deepMerge = require('deepmerge')
const formsPlugin = require('@tailwindcss/forms')
const { fontFamily } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const colors = require('./colors')


const uiConfig = {
    content: [
        './src/**/*.{html,js,jsx,ts,tsx}',
    ],
    plugins: [formsPlugin,
        plugin(function({ addBase, theme }) {
            addBase({
                'h1': { fontSize: theme('fontSize.5xl'), lineHeight: theme('lineHeight.12') },
                'h2': { fontSize: theme('fontSize.4xl'), lineHeight: theme('lineHeight.11') },
                'h3': { fontSize: theme('fontSize.3xl'), lineHeight: theme('lineHeight.10') },
                'h4': { fontSize: theme('fontSize.2xl'), lineHeight: theme('lineHeight.8.5') },
                'h5': { fontSize: theme('fontSize.xl'), lineHeight: theme('lineHeight.7') },
                'h6': { fontSize: theme('fontSize.lg'), lineHeight: theme('lineHeight.6') },
                'p': { fontSize: theme('fontSize.base'), lineHeight: theme('lineHeight.4') },
                'p.small': { fontSize: theme('fontSize.sm'), lineHeight: theme('lineHeight.4') }
            })
        })],
    theme: {
        colors,
        container: {
            padding: '2rem',
        },
        extend: {
            animation: {
                'fade-in': 'fade-in 200ms ease-in-out',
                overlay: 'overlay 200ms ease-in-out',
                'slide-down': 'slide-down 150ms ease-in',
            },
            boxShadow: {
                focus: '#ffffff 0px 0px 0px 0px, #6366f1 0px 0px 0px 2px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
            },
            gridColumn: {
                'span-13': 'span 13 / span 13',
                'span-14': 'span 14 / span 14',
                'span-15': 'span 15 / span 15',
                'span-16': 'span 16 / span 16',
                'span-17': 'span 17 / span 17',
                'span-18': 'span 18 / span 18',
                'span-19': 'span 19 / span 19',
                'span-20': 'span 20/ span 20',
            },
            height: {
                'app-header': '56px',
                'brand-logo': '150px',
                'card-header': '56px',
            },
            keyframes: {
                'fade-in': {
                    '0%': {
                        opacity: 0,
                    },
                    '100%': { opacity: 1 },
                },
                overlay: {
                    '0%': {
                        opacity: 0,
                    },
                    '100%': { opacity: 0.75 },
                },
                'slide-down': {
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(-10px)',
                    },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
            },
            lineHeight: {
                '3.5': '0.875rem', // 14px
                '8.5': '2.125rem', // 34px
                '11': '3rem', // 48px
                '12': '3.625rem', // 58px

            },
            maxHeight: {
                'dropdown-list': '40vh',
                'scroll-height': 'calc(100vh - 56px)',
            },
            maxWidth: {
                'company-selection': '150px',
                'sidebar-close': '80px',
                'sidebar-open': '256px',
            },
            minHeight: {
                button: '32px',
                'scroll-height': 'calc(100vh - 56px)',
            },
            minWidth: {
                12: '48px',
                'sidebar-close': '80px',
                'sidebar-open': '256px',
            },
            opacity: {
                80: '0.8',
            },
            screens: {
                xxl: { min: '1600px' },
            },
            spacing: {
                14: '3.5rem',
            },
            width: {
                31: '6rem',
                'brand-logo': '180px',
                'fit-content': 'fit-content',
                'sidebar-close': '80px',
                'sidebar-open': '256px',
            },
            zIndex: {
                '-1': -1,
                dialog: 9999,
                px: 1,
                slideover: 60,
                toast: 10000,
            }
        },
        fontFamily: {
            inter: ['Inter', ...fontFamily.sans],
        },
        fontSize: {
            // eslint-disable-next-line sort-keys-fix/sort-keys-fix
            'xs': ['0.6875rem', '0.875rem'], // 11px
            // eslint-disable-next-line sort-keys-fix/sort-keys-fix
            'sm': ['0.8125rem', '1rem'], // 13px
            // eslint-disable-next-line sort-keys-fix/sort-keys-fix
            'base': ['1rem', '1.25rem'], // 16px
            'lg': ['1.1875rem', '1.5rem'], // 19px
            'xl': ['1.4375rem', '1.75rem'], // 23px
            // eslint-disable-next-line sort-keys-fix/sort-keys-fix
            '2xl': ['1.75rem', '2.125rem'], // 28px
            '3xl': ['2.0625rem', '2.5rem'], // 33px
            '4xl': ['2.5rem', '3rem'], // 40px
            '5xl': ['3rem', '3.625rem'], // 48px
        },
    },
}

function arrayMergeFn(destinationArray, sourceArray) {
    return destinationArray.concat(sourceArray).reduce((acc, cur) => {
        if (acc.includes(cur)) return acc
        return [...acc, cur]
    }, [])
}

/**
 * Merge UI components config and Tailwind CSS configurations
 * @param {object} tailwindConfig - Tailwind config object
 * @return {object} new config object
 */
function wrapper(tailwindConfig) {
    return deepMerge({ ...tailwindConfig }, uiConfig, {
        arrayMerge: arrayMergeFn,
    })
}

module.exports = wrapper
