import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/views/Welcome.vue'
import Chatroom from '@/views/Chatroom.vue'
import { projectAuth } from '@/firebase/config'

//Auth guard
const requireAuth = (to, from, next) =>{
  let currentUser = projectAuth.currentUser
  console.log('current user:', currentUser)
  if(!currentUser){
    next('/')
  }
  next()
}


const routes = [
  {
    path: '/',
    name: 'home',
    component: Welcome
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
