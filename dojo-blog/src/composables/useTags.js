import {ref} from 'vue'

const useTags = (posts) => {
const tags = ref([])
//Set não apanha valores duplicados, é perfeito
const tagSet = new Set()

posts.forEach(post => {
    post.tags.forEach(tag => tagSet.add(tag))
})

tags.value = [...tagSet]

return {tags}
}

export default useTags