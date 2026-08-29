/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'mint-green': '#0c8c5e',
                'ink-black': '#08090a',
                'true-black': '#000000',
                'paper-white': '#ffffff',
                'mist-gray': '#f2f2f2',
                'cloud-gray': '#dddddd',
            },
            fontFamily: {
                inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'sm': '0px 2px 4px 0px rgba(0, 0, 0, 0.03)',
                'sm-2': '0px 2px 4px 0px rgba(0, 0, 0, 0.05)',
            },
            borderRadius: {
                'md': '4px',
                'lg': '8px',
                '2xl': '16px',
                '3xl': '24px',
            },
        },
    },
    plugins: [],
};