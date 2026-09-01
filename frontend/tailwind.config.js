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
        // 'h1':['4rem',{lineHeight:'1.1',fontWeight:'700'}] ,
        // 'h3':['1.8rem',{lineHeight:'1.1',fontWeight:'400'}],
        // 'h2':['2.2rem',{lineHeight:'1.1',fontWeight:'600'}],
        // 'h4':['1.4rem',{lineHeight:'1',fontWeight:'400'}]  
      },
      colors:{
        //universal color code (My way )
        'text':'#000',
        'softText':"#111111",
        'offText':'#1A1A1A',
        'charCoal':'#212121',
        'tinted':'#0B0B0B',
        
        'prim':'#fff',
        'smoke' : '#f7f7f7',
        "offPrim" : "#bcbcb4ff", 
        
        'gray':'#cccccc',
        'darkGrey':"#333333",
        'midGray':'#666666',


        'ivory':'#f5f5f0',



        "ivo": "#f7f3eb",
        'tan':"#f0e7da",
        'tan2':"#b8aa97",
        "mossy": "#342815",
        "mossy2": "#4c3a1e",



        

        // // only use on this project color palate 
        // 'pale_sand' : "#D8C9AE", //Main background color
        // 'muted_pale' : '#bbae96ff' , // section container #b3a793ff . #baae99ff . #c3b8a4ff
        // 'softened' : "#2F2F2F" , //  Inner container 
        // 'soft_coal' : "#333333", // heading text 
        // 'muted_soft' : "#4A4A4A", // sub heading text
        // "coal_gray" : "#575757", // meta text 
        // "text1" : "#575757", // text for light background 
        // "text2" : "#DEDEDE", // text for dark background
    
  
      },
    },
    screens:{
        'mini':'320px',
        'sp':'374px',
        'np':'414px',
        'lp':'575px',
        'st':'820px',   
        'mt':'990px',
        'nl':'1024px',
        'sl': '1199px',
        'desk':'1400px',
        'short':{'raw': '(max-height: 500px)'}
        
      }
  },

  plugins: [
      function ({ addVariant }) {
      const states = [
        'hover',
        'focus',
        'active',
        'visited',
        'focus-within',
        'focus-visible',
        'disabled',
        'checked',
      ];

      states.forEach(state => {
        addVariant(`nav-link-${state}`, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `.my-parent:${state} .${className}`;
          });
        });
      });
    }
  
  ],
}

