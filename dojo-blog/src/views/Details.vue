<template>
    <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <p class="pre">{{ post.body }}</p>
    </div>
</template>

<script>
import getPost from '@/composables/getPost.js'
import { useRoute } from 'vue-router'

export default {
    props:['id'],
    setup (props) {
      const route = useRoute()

        //Ambos obtem o mesmo resultado, um apanhando o id pelos props e outro pelo route que tem no parametro o id do post
        //const {post, error, load} = getPost(props.id)
        const {post, error, load} = getPost(route.params.id)
        
    
    load()

    return {post, error}
    }
}
</script>

<style scoped>
.post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
 
</style>