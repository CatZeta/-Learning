<template>
   <form @submit.prevent="handleUpdate">
        <label>Title:</label>
        <input type="text" v-model="title" required>
        <label>Details:</label>
        <textarea v-model="details" required></textarea>
        <button type="submit">Update Project</button>
    </form>
</template>

<script>
    export default {
        props: ['id'],
        data() {
            return {
                title: '',
                details: '',
                uri: 'http://localhost:3000/project/' + this.id
            }
        },
        mounted() {
            fetch(this.uri)
            .then((res) => res.json())
            .then((data) => {
                this.title = data.title
                this.details = data.details
            })
            .catch(err => console.error(err))
        },
        methods: {
            handleUpdate() {
                let projectUpdated = {
                    title: this.title,
                    details: this.details  
                }
                console.log(projectUpdated)

                fetch(this.uri, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify(projectUpdated)
                })
                .then(() => {
                    this.$router.push('/')
                })
                .catch(err => console.log(err.message))
            }
        }
     }
</script>

<style>
    
</style>