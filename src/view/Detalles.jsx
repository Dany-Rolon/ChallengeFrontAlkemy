import { GetPostsDetalle } from "../helpers/PostsHelpers"
import { useState, useEffect } from 'react'

export default function Detalles(props) {

    const id = props.match.params.id

    const [Post, setPost] = useState ([
        {detalle: ''}
    ]) 

    useEffect(() => {
        const GetPostDetalles = async () => {
            let detalles = await GetPostsDetalle(id)
            console.log(detalles)
            setPost(detalles)
        }
        GetPostDetalles()
    }, [id])

    return (
        <div className="grid grid-cols-1 justify-items-center mt-20 place-content-center">
            <div className="rounded-md border p-2 shadow-lg sm:mx-20">
                <h1 className="tituloPost text-md font-bold">{Post.title}</h1>
                <p className="mt-3">{Post.body}</p>
                
            </div>
        </div>
    )
}