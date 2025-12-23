/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {

      fontFamily:{
        'poppi':['Poppins', 'sans-serif','system-ui'],
        'roboto':['Roboto', 'sans-serif'],
        'inter':['Inter', 'sans-serif'],
      },
      fontSize:{
        'h1':['4rem',{lineHeight:'1.1',fontWeight:'700'}] ,
        'h2':['2rem',{lineHeight:'1.1',fontWeight:'500'}],
        'h3':['2.2rem',{lineHeight:'1.1',fontWeight:'600'}],
        'h4':['1.4rem',{lineHeight:'1',fontWeight:'600'}]
      },
      colors:{
        'text':'#000000',
        'm_text':"hsl(0 0% 10%)",
        'prim':'#ffffff',
        'm_prim':'hsl(0 0% 80%)',
        'gray':'hsl(0 0% 40%)',

        'pale_sand' : "#D8C9AE",
        "coal_gray" : "#575757",

        "m_green" : "#a2d0b3",
        "s_green": "#1c252a",


        'affair':"#6f4685",
        'matple' : "#392a3b", 
        "eb": ' #d0a4fe',

      },
    },
    screens:{
        'sm':'640px',
        'md':'768px',
        'lg':'1200px',
        'tabland':'1024px',
        '2xl':'1400px',
      }
  },
  plugins: [],
}

