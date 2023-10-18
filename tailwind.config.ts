import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    extend: {
      keyframes: {
        brightFlick: {
          '0%'  :  { opacity: 0 },
          '10%' :  { opacity: 0.03 },
          '20%' :  { opacity: 0.05 },
          '30%' :  { opacity: 0.1 },
          '40%' :  { opacity: 0 },
          '50%' :  { opacity: 0.02 },
          '60%' :  { opacity: 0.07 },
          '100%':  { opacity: 0 },
        }
      },
      animation: {
        'bright-flicker': 'brightFlick 3s ease-in-out infinite'
      },
      backgroundImage: {
        'main-wallpaper' : 'url(~/assets/images/background.jpg)',
        'main-wallpaper-left-light' : 'url(~/assets/images/background-left-light.png)',
        'logotype-overlay' : 'url(~/assets/images/logotype-bg-mask.jpg)'
      }
    }
  },
  plugins: [],
  content: [],
};
