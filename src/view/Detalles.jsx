import { GetPostsDetalle } from "../helpers/PostsHelpers"
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default function Detalles({props, setShowingAlert, setMessage}) {
    const history = useHistory()
    const id = props.match.params.id

    const [Post, setPost] = useState ([
        {detalle: ''}
    ]) 

    useEffect(() => {
        const GetPostDetalles = async () => {
            let detalles = await GetPostsDetalle(id)
            console.log(detalles);
            if(!detalles){
                setMessage({
                    color: 'red',
                    message:'No se ha encontrado el post'
                })
                setShowingAlert(true)
                history.replace('/')
            }
            setPost(detalles)
        }
        GetPostDetalles()
    }, [id, setMessage, history, setShowingAlert])

    return (
        <div className="grid grid-cols-1 justify-items-center mt-20 place-content-center">
            <div className="rounded-md border p-2 shadow-lg sm:mx-20">
                <h1 className="tituloPost text-md font-bold">{Post.title}</h1>
                <p className="mt-3">{Post.body}</p>
                
            </div>
        </div>
    )
}