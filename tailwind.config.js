/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#17A04E',
                secondary: '#225C39',
            },
        },
    },
    daisyui: {
        themes: [
            'light',
            'dark',
            'cupcake',
            'emerald',
            'forest',
            {
                mytheme: {
                    primary: '#17A04E',
                    'primary-content': '#000f08',
                    secondary: '#225C39',
                    'secondary-content': '#000d04',
                    accent: '#ed1700',
                    'accent-content': '#140000',
                    neutral: '#160605',
                    'neutral-content': '#cbc6c5',
                    'base-100': '#fffeff',
                    'base-200': '#deddde',
                    'base-300': '#bebdbe',
                    'base-content': '#161616',
                    info: '#00a2ff',
                    'info-content': '#000a16',
                    success: '#00b75b',
                    'success-content': '#000c03',
                    warning: '#da6e00',
                    'warning-content': '#110400',
                    error: '#fe6176',
                    'error-content': '#160305',
                },
            },
        ],
    },
    plugins: [require('daisyui')],
};
