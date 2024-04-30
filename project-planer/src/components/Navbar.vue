<template>
    <div class="main-nav">
        <router-link :to="{name: 'home'}">Projects</router-link>
        <router-link :to="{name: 'addProject'}">Add New Project</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .main-nav {
        text-align: center;
        margin: 40px auto;
    }
/* As anchor tags são referentes ao router-link, que na dom passa a ser um <a>  */
    .main-nav a{
        display: inline-block;
        text-decoration: none;
        margin: 0 10px;
        color: #999;
        font-size: 18px;
    }
    a.router-link-active {
        border-bottom: 2px solid #0cdd24;
        padding-bottom: 4px;
    }
</style>