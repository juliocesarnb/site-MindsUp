// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      fontFamily:{
        stickler:"'Stickler-pro', sans-serif"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'orange-1':'#FC8F22',
        'orange-2':'#726C7A',
        'orange-3':'#FBEDDF',
        'orange-4':'#FF8640',
        'orange-5':'#FDAD5E',
        'orange-6': '#290F00',
        'black-1':'#726C7A',
        'black-2':'#5F5968',
        'black-3':'#7B7585',
        'black-4':'#534C5E',
        'black-5': '#0F172A',
        'white-1':'#EDE5F1',
        'white-2':'#F2EEF7',
        'gray-1':'#C5BDD1',
        'gray-2':'#F2F5F7',
        'purple-1':'#F4EDF7',
        'purple-2': '#283c69',
        'purple-3': '#4D1353',
        'blue-1':'#E8F2F7',
        'blue-2':'#0B2E47',
        'blue-dark':'#2B2D42',
        'purple-dark':'#22162B',
        'purple-acc': '#CDC7E5',
        'orange-acc': '#F6FEDB',
        'green-acc': '#CAE7B9',
        
      },
      height: {
        '128': '36rem',
      },
      width: {
        '128': '90rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
        'mLarge': '110px',
      }
      
    },
  },
  plugins: [],
  
}
