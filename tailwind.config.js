/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      'mid-grey': '#585858',
      'dark-grey': '#333',
      'darker-grey': '#222',
      'light-brown': '#4b3d3d',
      'light-green': '#88a63e',
      'grey-26': '#262626',
      'grey-31': '#313131',
      'grey-42': '#424242',
      'grey-55': '#555555',
      'grey-66': '#666666',
      'grey-EE': '#EEEEEE',
      'grey-F8': '#F8F8F8',
      'grey-F9': '#F9F9F9',
      'grey-FC': '#FCFCFC',
    },
    fontSize: {
      'size-11': '11px',
      'size-13': '13px',
      'size-14': '14px',
      'size-15': '15px',
      'size-23': '23px',
    },
    lineHeight: {
      'size-15': '15px',
      'size-21': '21px',
      'size-26': '26px',
      'size-44': '44px',
    },
    letterSpacing: {
      'size-2': '2px'
    },
    maxWidth: {
      '82': '330px'
    },
    maxHeight: {
      '62': '250px',
    },
    height: {
      '8': '30px',
      '18': '50px',
    },
    extend: {
      gridTemplateColumns: {
        'contact-grid': '631px 316px',
        'main-grid': '190px,auto',
      }
    },
  },
  plugins: [],
};
