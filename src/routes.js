import HomePage from './pages/home.vue';
<<<<<<< Updated upstream
import APMPAGE from './pages/apm';
import KONGTIAOPAGE from './pages/kongtiao';
import LIGHTPAGE from './pages/light'
=======
import APMPAGE from './pages/apm.vue';
import CURTAINPAGE from './pages/curtain.vue'
>>>>>>> Stashed changes
export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path:'/apm/',
    component: APMPAGE
  },
  {
<<<<<<< Updated upstream
    path:'/kongtiao/',
    component:KONGTIAOPAGE
  },
  {
    path:'/light/',
    component:LIGHTPAGE
=======
    path:'/curtain/',
    component:CURTAINPAGE
>>>>>>> Stashed changes
  }
];
