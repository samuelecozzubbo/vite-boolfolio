import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';
import ProjectDetail from '../views/ProjectDetail.vue';
import Contacts from '../views/Contacts.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      //PASSO IL PARAMETRO DINAMICO
      path: '/dettaglio-progetto/:slug',
      name: 'projectdetail',
      component: ProjectDetail
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
  ]
})

export default router
