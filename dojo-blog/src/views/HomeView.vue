<template>
  <div class="home">
    <h1>Hello Zeta</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts"/>    
    </div>
    <div v-else>
     Trying to load ...
    </div>
    </div>
</template>

<script>
import PostList from "@/components/PostList.vue"
import getPosts from "@/composables/getPosts.js"


export default {
  name: 'HomeView',
  components: {PostList},
  setup() {
    const {posts,error, load} = getPosts()
    
    load()
    return{posts, error}
  }
}
</script>
