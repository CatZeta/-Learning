import { ref } from "vue"

//NOT BEING USED
const setPost = (create) => {
    const create = ref([null])
    const error = ref(null)

    const addPost = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(create)
        })

        if(!data.ok) {
          throw Error('trouble adding the new post...')
        }

        create.value = await data.json()

      } catch (err) {
        error.value = err.message
        console.log(err.value)
      }
    }
    return {create, error, addPost}
}


export default setPost
