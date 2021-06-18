import Axios from 'axios'

const GetPosts = async () => {
    let response = await Axios.get('https://jsonplaceholder.typicode.com/posts')
    return response.data
}

const GetPostsDetalle = async (id) => {
    let {status, data} = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if(status === 200){
        return data
    } else {
        console.log('Hubo un error');
    }
}

const DeletePost = async(id) => {
    let response = await Axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    console.log(response);
    if(response.status === 200){
        return true
    } else {
        console.log('Ocurrio un error');
    }
}

export {
    GetPosts,
    DeletePost,
    GetPostsDetalle
}


