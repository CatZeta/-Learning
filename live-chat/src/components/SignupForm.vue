<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" v-model="displayName" placeholder="display name" required>
        <input type="email" v-model="email" placeholder="email" required>
        <input type="password" v-model="password" placeholder="password" required>
        <div class="error">{{ error }}</div>
        <button type="submit">Sign up</button>
    </form>
</template>

<script>
import { ref } from "vue";
import useSignup from "@/composables/useSignup";
import { useRouter } from "vue-router";

export default {
    setup () {
        const router = useRouter()
        const {error, signup} = useSignup()

        const displayName = ref('')
        const email = ref('')
        const password = ref('')

//Existe diferença nesta forma e atraves de um custom event? para ter uma só funçao para ambos redirect?
        const handleSubmit = async () => {
            await signup(email.value, password.value, displayName.value)
            if(!error.value) {
                router.push({name: 'chatroom'})
            }
        }

        return {displayName, email, password, handleSubmit, error}
    }
}
</script>

<style lang="scss" scoped>

</style>