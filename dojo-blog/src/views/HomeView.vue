<template>
  <div class="home">
    <h1>Dojo - Blog</h1>
    <div v-if="error">{{ error }}</div>
    <div class="layout" v-if="posts.length">
      <PostList :posts="posts"/>
      <TagCloud :posts="posts"/>
    </div>
    <div v-else>
     Trying to load ...
    </div>
    </div>
</template>

<script>
import PostList from "@/components/PostList.vue"
import TagCloud from "@/components/TagCloud.vue"
import getPosts from "@/composables/getPosts.js"


export default {
  name: 'HomeView',
  components: {PostList, TagCloud},
  setup() {
    const {posts, error, load} = getPosts()
    
    load()
    return{posts, error}
  }
}
</script>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>
