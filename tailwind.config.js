module.exports = {
  theme: {
    extend: {
      inset: {
        'full': '100%',
      },
      opacity: {
        '10': '0.1',
        '90': '0.9',
      },
      colors: {
        transparent: 'transparent',

        black: '#000',
        white: '#fff',

        gray: {
          300: '#E2E5E7',
          400: '#C8C8C8',
          500: '#AAA',
          600: '#2D2D2D',
        },

        blue: {
          400: '#066C9E',
        },

        green: {
          400: '#5EB26D',
          500: '#39b97c',
          600: '#0d8957',
        },

        red: {
          400: '#D36E69',
          500: '#e66d4e',
        },

        orange: {
          400: '#d99f6f',
        },
      },
    },
  },
  variants: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: [],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive', 'group-hover'],
    flexDirection: ['responsive'],
    flexWrap: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    justifyContent: ['responsive'],
    alignContent: ['responsive'],
    flex: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive', 'group-hover'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover'],
    outline: ['focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    inset: ['responsive'],
    resize: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    fill: [],
    stroke: [],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    fontSize: ['responsive'],
    fontStyle: ['responsive'],
    textTransform: ['responsive'],
    textDecoration: ['responsive', 'hover', 'focus'],
    fontSmoothing: ['responsive'],
    letterSpacing: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive', 'hover', 'group-hover'],
    whitespace: ['responsive'],
    wordBreak: ['responsive'],
    width: ['responsive', 'group-hover'],
    zIndex: ['responsive'],
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({
      addUtilities,
    }) {
      const newUtilities = {
        '.transition': {
          transition: '.5s',
        },
        '.hover-scale': {
          transform: 'scale(1.1)',
        },
        '.translate-5': {
          transform: 'translateY(-5px)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover', 'group-hover'])
    },
  ],
}
