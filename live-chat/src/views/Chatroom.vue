<template>
    <div class="container">
      <Navbar />
      <ChatWindow />
      <NewChatForm />
    </div>
  
</template>

<script>
import ChatWindow from '@/components/ChatWindow.vue'
import NewChatForm from '@/components/NewChatForm.vue';
import Navbar from '@/components/Navbar.vue'
import getUser from '@/composables/getUser';
import { useRouter } from 'vue-router'; 
import { watch } from 'vue';

export default {
    components: { Navbar, NewChatForm, ChatWindow },
    setup () {
      const {currentUser} = getUser()
      const router = useRouter()

      //function watch, 1st argument is what to watch and de 2nd the function to fire when it changes
      watch(currentUser, () => {
        if(!currentUser.value) {
          router.push('/')
        }
      })

        return {}
    }
}
</script>

<style>
    nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
    nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
    nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>