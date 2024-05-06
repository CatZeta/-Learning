<template>
    <form @submit.prevent="handleSubmit">
        <input type="email" v-model="email" placeholder="email"required>
        <input type="password" v-model="password" placeholder="password" required>
        <div class="error">{{ error }}</div>
        <button type="submit">Log in</button>
    </form>
</template>

<script>
import useLogin from "@/composables/useLogin";
import { ref } from "vue";


export default {
    setup (props, context) {
        
        const {error, login} = useLogin()

        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            await login(email.value, password.value)
            if(!error.value) {
                context.emit('login')
            }
        }

        return {email, password, handleSubmit, error}
    }
}
</script>

<style lang="scss" scoped>

</style>