/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                'sans': '"Open Sans"',
                'heebo': '"Heebo"',
                'varela': '"Varela Round"'
            },
            spacing: {
                '2px': '2px'
            },
            colors: {
                'whitespace': '#E5D9B6',
                'primary': {
                    100: '#C0D9B4',
                    300: '#AECC9E',
                    500: '#9DC08B',
                    700: '#8CAC7C',
                    900: '#7C996E'
                },
                'secondary': {
                    100: '#97C29B',
                    300: '#7AAD7F',
                    500: '#609966',
                    700: '#578A5C',
                    900: '#4D7A52'
                },
                'action': '#285430'
            }
        },
    },
    plugins: [],
}