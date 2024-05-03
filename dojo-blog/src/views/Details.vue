<template>
    <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <p class="pre">{{ post.body }}</p>
        <button @click="handleDelete" class="delete">Delete</button>
    </div>
</template>

<script>
import getPost from '@/composables/getPost.js'
import { projectFirestore } from '@/firebase/config'
import { useRoute, useRouter } from 'vue-router'

export default {
    props:['id'],
    setup (props) {
      const route = useRoute()
      const router = useRouter()

        //Ambos obtem o mesmo resultado, um apanhando o id pelos props e outro pelo route que tem no parametro o id do post
        //const {post, error, load} = getPost(props.id)
        const {post, error, load} = getPost(route.params.id)
        
        const handleDelete = async () => {
          await projectFirestore.collection('posts')
            .doc(props.id)
            .delete()
            
            router.push('/')
        }
    
    load()

    return {post, error, handleDelete}
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
  button.delete {
    margin: 10px auto;
    background: #f84040;
    position: absolute;
    padding-right: 40px;
    transform: rotateZ(-1.5deg);
  }
 
</style>