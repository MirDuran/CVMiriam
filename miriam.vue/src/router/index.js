import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import Curriculum from '@/views/Curriculum.vue'
import Fullscat from '../views/projects/fullscat.vue'
import Javalinos from '../views/projects/javalinos.vue'
import NewTitans from '../views/projects/newtitans.vue'

const router = createRouter({
  history: createWebHashHistory('/CVMiriam/'),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/projects', name: 'projects', component: ProjectsView },
    { path: '/cv', name: 'Curriculum', component: Curriculum },
    { path: '/projects/fullscat', name: 'fullscat', component: Fullscat },
    { path: '/projects/javalinos', name: 'javalinos', component: Javalinos },
    { path: '/projects/newtitans', name: 'newtitans', component: NewTitans },
  ],
})

export default router
