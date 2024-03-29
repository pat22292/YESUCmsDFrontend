// module.exports = {
//   future: {
//     removeDeprecatedGapUtilities: true,
//     purgeLayersByDefault: true,
//   },
//   purge: {
//     enabled: true,
//     content:  ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}']
//   },
//   theme: {
//     extend: {},
//   },
//   variants: {},
//   plugins: [],
// }

const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  darkMode: 'class',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: false,
  },
  options: {
    safelist: {
      standard: [
        /translate-*^[\w:]/,
        /gap-x-*^[\w:]/,
        /gap-y-*^[\w:]/,
        /right-*^[\w:]/,
        /border-*^[\w:]/,
        /max-w-*^[\w:]/,
        /^[\w:]*col-start-/,
        /^[\w:]*col-end-/,
        /^[\w:]*col-span-/,
        /sm:*^[\w:]/,
        /xl:*^[\w:]/,
        /md:*^[\w:]/,
        /resize-*^[\w:]/
      ]
    }
  },
  // purge: ['./Layouts/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './loading/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
        'theme-blue': '#004a9f',
        'theme-green': '#131A22',
        'dark-bg': '#202124',
        'minion-yellow': '#f3de2c',
        'text-bb': '#2D3047',
        'pewter-blue': '#93B7BE',
        'rich-black-fogra': '#0D1821',
        'light-steel-blue': '#4b88c8',
        'indigo-dye': '#344966'
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        
      },
      fontFamily: {
        'shrikhand': ['"Shrikhand"', ...defaultTheme.fontFamily.sans],
        'nova-flat': '"Nova Flat"'
      }
      // screens: {
      //   dark: { raw: '(prefers-color-scheme: dark)' },
      // },
    },

  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['checked'],
      borderColor: ['checked'],

    }
  },
  
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animated')

  ],
}
