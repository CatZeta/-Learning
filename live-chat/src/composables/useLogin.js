import { projectAuth } from "@/firebase/config"
import { ref } from "vue"


const error = ref(null)

const login = async (email, password) => {
    error.value = null

    try {
        const resp = await projectAuth.signInWithEmailAndPassword(email, password)
        if(!resp){
            throw new Error('could not login')
        }

        console.log(resp)
        error.value = null

        return resp

    } catch (err) {
        error.value = 'Invalid credentials'
        console.log(err.message)
    }
    
}

const useLogin = () => {return { error, login }}

export default useLogin