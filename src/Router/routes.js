import { createRouter, createWebHistory } from 'vue-router'

import Home from '../Pages/Home.vue'
import About from '../Pages/About.vue'
import Services from '../Pages/Services.vue'
import Project from '../Pages/Project.vue'
import Contact from '../Pages/Contact.vue'
import NotFound from '../Pages/NotFound.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/services', name: 'services', component: Services },
  { path: '/project', name: 'project', component: Project },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

export default router