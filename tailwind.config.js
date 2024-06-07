/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    daisyui: {
        themes: ['light', 'dark', 'cupcake', 'emerald', 'forest'],
    },
    plugins: [require('daisyui')],
};
