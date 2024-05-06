<template>
    <nav v-if="currentUser">
        <div>
            <p>Hey there {{currentUser.displayName}}</p>
            <p class="email">Currently logged in as {{currentUser.email}}</p>
        </div> 
        <button @click="handleLogout">Logout</button>
    </nav>
</template>

<script>
import useLogout from '@/composables/useLogout'
import getUser from '@/composables/getUser'

export default {
    setup () {
        const {error, logout} = useLogout()
        const {currentUser} = getUser()

        const handleLogout = async () => {
           await logout()
        }

        return {handleLogout, error, currentUser}
    }
}
</script>

<style lang="scss" scoped>

</style>