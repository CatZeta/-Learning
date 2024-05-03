<template>
    <div class="tag">
     <div v-if="error">{{ error }}</div>
     <div v-if="posts.length">
        <PostList :posts="postsWithTag"></PostList>
        <TagCloud :posts="posts" />
    </div>
    </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import TagCloud from '@/components/TagCloud.vue'
import getPosts from '@/composables/getPosts.js'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

    export default {
        components: { PostList, TagCloud },
        setup() {
        const route = useRoute()
            

        const {posts, error, load} = getPosts()

        load()

        const postsWithTag = computed(() => {
            return posts.value.filter((post) => post.tags.includes(route.params.tag))
        })
        return {posts, error, postsWithTag}
    }
        }
        
</script>

<style >

</style>