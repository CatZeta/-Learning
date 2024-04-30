<template>
    <div class="project" :class="{complete: project.complete}">
        <div class="actions">
            <h3 @click="toggleDetails">{{ project.title }}</h3>
            <div class="icons">
                <RouterLink :to="{name: 'editProject', params: {id: project.id}}">
                    <span class="material-symbols-outlined">edit</span>
                </RouterLink>
                
                <span  @click="deleteProject" class="material-symbols-outlined">delete</span>
                <span @click="toggleComplete" class="material-symbols-outlined tick">done</span>
            </div>
        </div>
        <div v-if="showDetails" class="details">
            <p>{{ project.details }}</p>
        </div>
    </div>    
</template>

<script>
export default {
    props: ['project'],
    methods: {
        toggleDetails() {
            this.showDetails = !this.showDetails
        },
        deleteProject() {
            fetch(this.uri, {method: 'DELETE'})
            .then(() => this.$emit('delete', this.project.id))
            .catch((err) => console.log(err.message))
        },
        toggleComplete() {
            fetch(this.uri, {
                method: 'PATCH',
                headers: { 'content-type': 'application/json'},
                body: JSON.stringify({complete: !this.project.complete})
            })
            .then(() => this.$emit('complete', this.project.id))
            .catch((err) => err.message)
        }
    },
    data() {
        return{
            showDetails: false,
        //Endpoint, so it's easier, reusable
            uri: 'http://localhost:3000/project/' + this.project.id
        }
    }
}
</script>

<style>
.project {
    margin: 20px auto;
    background: whitesmoke;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
    border-left: 4px solid #e90074;
}
h3 {
    cursor: pointer;
}
.actions{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.material-symbols-outlined {
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
}
.material-symbols-outlined:hover {
    color: #777;
}
/*Completed tasks */
.project.complete {
    border-left: 4px solid #0cdd24;
}
.project.complete .tick{
    color: #0cdd24;
}
</style>
