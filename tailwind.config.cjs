/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
        bebasNeue: ['Bebas Neue', 'cursive'],
        leagueGothic: ['League Gothic', 'sans-serif'],
        firaCode: ['Fira Code', 'monospace'],
        pressStart: ['\"Press Start 2P\"', 'cursive'],
    },
    extend: {
      screens: {
        'xs': '475px',
      },
      backgroundImage: {
        BG404: "url('/404.svg')",
        bgAbout: "url('/AboutMeBG.svg')",
        bgMirai: "url('/MiraiBG.svg')",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '25%': '25%',
        '1': '0.25rem',
        '2': '0.5rem',
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '18': '4.5rem',
        '20': '5rem',
        '22': '5.5rem',
        '24': '6rem',
        '26': '6.5rem',
        '28': '7rem',
        '30': '7.5rem',
        '32': '8rem',
        '34': '8.5rem',
      },
      blur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('tailwind-hamburgers'),
    require('@catppuccin/tailwindcss')({prefix: 'ctp'}),
  ],
}
