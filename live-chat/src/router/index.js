import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/views/Welcome.vue'
import Chatroom from '@/views/Chatroom.vue'
import { projectAuth } from '@/firebase/config'

//Auth guard
const requireAuth = (to, from, next) =>{
  let currentUser = projectAuth.currentUser
  if(!currentUser){
    next('/')
  }else{
  next()
  }
}

const requireNoAuth = (to, from, next) => {
  let currentUser = projectAuth.currentUser
  if(currentUser) {
    next('/chatroom')
  }else{
  next()
  }
}


const routes = [
  {
    path: '/',
    name: 'home',
    component: Welcome,
    beforeEnter: requireNoAuth
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
