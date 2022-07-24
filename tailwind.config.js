module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: { min: '300px', max: '600px' },
      md: { min: '600px', max: '1024px' },
      lg: { min: '1024px' },
      xl: { min: '1200px' },
      '2xl': { min: '1536px' },
      '3xl': { min: '1792px' }
    },
    extend: {
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
        brightGreenColor:'#00FFD1',
        darkBorderColor:'#2e3f4d',
        warningColor: '#D73F75',
        growingColor: '#3BB73B',
        opacity80White: '#cccccc',
        hightGreenColor:'#00FFD1'
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
      marginBottom: ['first', 'last']
    }
  },
  plugins: []
};
