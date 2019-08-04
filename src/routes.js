import HomePage from './pages/home.vue';
import APMPAGE from './pages/apm';
import KONGTIAOPAGE from './pages/kongtiao';
import LIGHTPAGE from './pages/light'
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
  }
];
