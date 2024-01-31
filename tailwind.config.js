/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 16 row grid
        'weekly9': 'repeat(9, minmax(0, 155px))',
        'weekly4': 'repeat(4, minmax(0, 300px))',

      },
      colors: {
        yellow: {
          100: "#fcb900",
        },
      },
      // boxShadow: {
      //   "normal": "0 1px 10px rgba(0,0,0,0.05)",
      // },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        Dana: "Dana",
        DanaMedium: "Dana Medium",
        DanaDemiBold: "Dana DemiBold",
      },
      letterSpacing: {
        tightest: "-0.065em",
      },
      spacing:{
        "30":"7.5rem"
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          lg:"0.625rem"
        }
      },
      backgroundImage:{
        'home-header': "url('./../public/home-page-headerBg.jpg')",
      }
    },
    screens: {
      'xs':'500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  }, 
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
