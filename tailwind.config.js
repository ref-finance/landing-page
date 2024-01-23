module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      greenLight: '0px 0px 12px rgba(0, 255, 209, 0.6)'
    },
    screens: {
      sm: { min: '300px', max: '600px' },
      md: { min: '600px', max: '1024px' },
      lg: { min: '1024px' },
      xl: { min: '1200px' },
      '2xl': { min: '1536px' },
      '3xl': { min: '1792px' }
    },
    extend: {
      dropShadow: {
        lightWhite: '0px 0px 12px rgba(255, 255, 255, 0.6)'
      },
      screens: {
        s: { min: '300px', max: '1024px' },
        l: { min: '1024px' }
      },
      colors: {
        primary: '#00D6AF',
        secondary: '#F9FAFB',
        mobile: '#00C6A2',
        dark: '#001320',
        'dark-70': 'rgba(0, 19, 32, 0.7)',
        'dark-border': 'rgba(8, 97, 81, 0.39)',
        'dark-border': 'rgba(8, 97, 81, 0.39)',
        'green-dark': '#1AA189',
        'gray-text': '#73818B',
        globalBg: '#131419',
        roadmapBg: '#161e22',
        greenColor: '#3AFFF2',
        darkBorderColor: '#2e3f4d',
        warningColor: '#D73F75',
        growingColor: '#3BB73B',
        opacity80White: '#cccccc',
        hightGreenColor: '#00FFD1',
        blueColor: 'rgba(24, 48, 48, 0.7)',
        brightGreenColor: 'rgba(0, 94, 88, 0.8)',
        greenColor: '#1d4a46',
        shadowColor: 'rgba(14, 33, 33, 0.8)',
        shadowColorIcon: '0px 0px 12px rgba(0, 255, 209, 0.6)',
        footerHoverColor: '#00C6A2'
      }
    },
    fontFamily: {
      lexend: ['"Lexend Deca"'],
      poppins: ['"Poppins"']
    }
  },
  variants: {
    extend: {
      justifySelf: ['first', 'last'],
      marginBottom: ['first', 'last'],
      filter: ['hover', 'focus'],
      dropShadow: ['hover']
    }
  },
  plugins: []
};
