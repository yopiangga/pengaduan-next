const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
  ...defaultColors,
  ...{
    "light": "#F6F6F6",
    "dark": "#193459",
    "darkBlue": "#1263D3",
    "lightBlue": "#0EA5E3",
    "darkGreen": "#149B98",
    "lightGreen": "#85D360",
    "yellow": "#FFC542",
    "orange": "#FA7D4D"
  },
}

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: colors,
    extend: {
      divideColor: ['group-hover'],
    },
    fontFamily: {
      'sans': ['system-ui', 'ui-sans-serif'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
    },

    backgroundImage: theme => ({

    }),

    screens: {
      'mini' : {'max': '349px'},

      'mobile': '350px',
      // 
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {
    width: ["responsive", "hover", "focus", "group-hover"],
    extend: {
      position: ['hover', 'focus'],
      maxWidth: ['hover', 'focus'],
    },
  },
  corePlugins: {
    position: true,
  },
}
