import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import { projectAuth } from './firebase/config'

let app

//Isto não significa que a app só é renderizada após haver um user? e não é a app que renderiza as views ? tais como login component e sign up component
projectAuth.onAuthStateChanged(() => {
    if(!app){
        app = createApp(App).use(router).mount('#app')
    }
})

