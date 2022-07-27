import { defineConfig } from "windicss/helpers";
import colors from 'windicss/colors'
export default defineConfig({
  /* 配置项... */
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        green: colors.green,
        oop: 'white',
        toLogin: '#1f2937',
        LoginBG:"#141e30",
        LoginBGto:"#243b55"
        
      },
      textColor: {
        'success':'green'
      }
    },

  },
  shortcuts: {
    'flex-y-center': 'flex items-center',
    'flex-center': 'flex justify-center items-center',
  },
  
});
