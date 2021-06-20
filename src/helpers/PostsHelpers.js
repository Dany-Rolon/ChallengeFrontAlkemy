import Axios from 'axios'

const GetPosts = async () => {
    let response = await Axios.get('https://jsonplaceholder.typicode.com/posts')
    return response.data
}

const GetPostsDetalle = async (id) => {
    try {
        let {data} = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return data
    } catch (error) {
        return false
    }
}

const DeletePost = async(id) => {
    try {
        let response = await Axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        console.log(response);
        return true
    } catch (error) {
        return false
    }
}

const ModificarPost = async(id, post) => {
    let response = await Axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, post)
    console.log(response);
    if(response.status === 200){
        return true
    } else {
        console.log('Hubo un error')
        return false
    }
}

const CreatePost = async(obj) => {
    let response = await Axios.post(`https://jsonplaceholder.typicode.com/posts`,obj)
    console.log(response)
}

export {
    GetPosts,
    DeletePost,
    GetPostsDetalle,
    ModificarPost,
    CreatePost
}