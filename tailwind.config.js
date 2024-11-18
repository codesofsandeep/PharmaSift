/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      boxShadow: {
        custom: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
      },
      
      animation:{
    
        "loop-scroll": "loop-scroll 20s linear infinite",
      },

      keyframes:{
        "loop-scroll":{
          from: {transfrom: "translateX(0)"},
          to: {transform: "translate(-100%)"},
        },
      },
    },
  },
  plugins: [],
}

