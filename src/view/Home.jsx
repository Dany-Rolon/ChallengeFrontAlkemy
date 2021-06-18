import Posts from './../components/Posts'
import {GetPosts} from '../helpers/PostsHelpers'
import { useEffect, useState } from 'react'

const Home = () => {

    const [posts, setPosts] = useState([
        {title: ''}
    ])

    useEffect(() => {
        const GetPostsFromApi = async () => {
            let allThePosts = await GetPosts()
            setPosts(allThePosts)   
        }

        GetPostsFromApi()
    }, [])


    return ( 
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center place-content-center">
            {posts.map(post => <Posts key={post.id} post={post} />)}
        </div>
     );
}
 
export default Home;