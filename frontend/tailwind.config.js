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
        'blk':"hsl(0 0% 10%)",
        'mblk':"hsl(0 0% 16%)",
        'prim':'#ffffff',
        'wht':'hsl(0 0% 92%)',
        'mwht':'hsl(0 0% 70%)',
         'gray':'hsl(0 0% 40%)',

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

