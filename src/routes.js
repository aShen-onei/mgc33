import HomePage from './pages/home.vue';
import KONGTIAOPAGE from './pages/kongtiao';
import LIGHTPAGE from './pages/light';
import APMPAGE from './pages/apm.vue';
import CURTAINPAGE from './pages/curtain.vue'
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
    path:'/kongtiao/',
    component:KONGTIAOPAGE
  },
  {
    path:'/light/',
    component:LIGHTPAGE
    },
    {
    path:'/curtain/',
    component:CURTAINPAGE
    }
];
