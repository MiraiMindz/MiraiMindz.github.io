/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
        bebasNeue: ['Bebas Neue', 'cursive'],
        leagueGothic: ['League Gothic', 'sans-serif'],
        firaCode: ['Fira Code', 'monospace'],
        antonio: ['Antonio', 'sans-serif'],
        walterTurncoat: ['Walter Turncoat', 'cursive'],
    },
    borderWidth: {
      '0': '0',
      '1': '0.1rem',
      '2': '0.2rem',
      '4': '0.4rem',
      '5': '0.6rem',
      '6': '0.8rem',
      '8': '1.6rem',
    },
    extend: {
      screens: {
        'xs': '475px',
        '3xl': '1920px',
        '4xl': '3840px',
      },
      backgroundImage: {
        BG404: "url('/Backgrounds/PageNotFound.svg')",
        BG404Light: "url('/Backgrounds/PageNotFoundLight.svg')",
        bgAbout: "url('/Backgrounds/SobreMim.svg')",
        bgMirai: "url('/Backgrounds/Mirai.svg')",
        bgAboutLight: "url('/Backgrounds/SobreMimLight.svg')",
        bgMiraiLight: "url('/Backgrounds/MiraiLight.svg')",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '25%': '25%',
        '50%': '50%',
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
        '36': '9rem',
        '38': '9.5rem',
        '40': '10rem',
        '42': '10.5rem',
        '44': '11rem',
        '46': '11.5rem',
        '48': '12rem',
        '50': '12.5rem',
        '52': '13rem',
        '54': '13.5rem',
        '56': '14rem',
        '58': '14.5rem',
        '60': '15rem',
        '62': '15.5rem',
        '64': '16rem',
        '66': '16.5rem',
        '68': '17rem',
        '70': '17.5rem',
        '72': '18rem',
        '74': '18.5rem',
        '76': '19rem',
        '78': '19.5rem',
        '70': '20rem',
        '72': '20.5rem',
      },
      blur: {
        xs: '2px',
      },
      listStyleType: {
        square: 'square',
        roman: 'upper-roman',
      },
      spacing: {
        '124': '30rem',
        '126': '31rem',
        '128': '32rem',
        '132': '36rem',
        '133': '37rem',
        '134': '38rem',
        '136': '40rem',
        '140': '42rem',
        '144': '44rem',
        '148': '46rem',
        '152': '50rem',
        '156': '52rem',
        '160': '54rem',
        '164': '56rem',
        '168': '60rem',
        '172': '62rem',
        '176': '64rem',
      },
    },
  },
  plugins: [
    require('tailwind-hamburgers'),
    require('@catppuccin/tailwindcss')({prefix: 'ctp'}),
  ],
}
