<template>
    <form>
        <textarea 
        placeholder="Type a message and hit enter to send"
        @keydown.enter.prevent="handleSubmit"
        v-model="message"
        ></textarea>
        <div class="error">{{ error }}</div>
    </form>
</template>

<script>
import {ref} from 'vue'
import getUser from '@/composables/getUser'
import {timestamp } from '@/firebase/config'
import useCollection from '@/composables/useCollection'

export default {
    setup () {
        const {error, addDoc} = useCollection('messages')
        const {currentUser} = getUser()    
        const message = ref('')
        
        const handleSubmit = async () => {
            const chat = {
                message: message.value,
                name: currentUser.value.displayName,
                createdAt: timestamp()
            }
            await addDoc(chat)
            if(!error.value) {
                message.value = ''
            }         
        }

        return {handleSubmit, message, error}
    }
}
</script>

<style scoped>
  form {
    margin: 10px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }
</style>