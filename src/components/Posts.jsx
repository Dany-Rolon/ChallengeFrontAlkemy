import Axios from 'axios'

const Posts = async () => {
    let response = await Axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(response)
    return ( 
        <div>
            
        </div>
     );
}
 
export default Posts;


