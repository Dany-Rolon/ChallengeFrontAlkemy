import { useEffect, useState } from "react"
import { GetPostsDetalle, ModificarPost } from '../helpers/PostsHelpers'
import { useHistory } from 'react-router-dom'

export default function FormularioEdicion({props, setShowingAlert, setMessage}) {
    const history = useHistory()
    const id = props.match.params.id

    const [newPost, setNewPost] = useState({
        title: '',
        content: ''
    })

    useEffect(() => {
        async function SetThePost() {
            let post = await GetPostsDetalle(id)
            setNewPost({
                title: post.title,
                body: post.body
            })
            console.log('Se llamo al API');
        }
        SetThePost()
        // console.log(props);
    }, [id])

    function OnChange(e) {
        setNewPost({
            ...newPost,
            [e.target.name]: e.target.value
        })
    }

    async function Submit() {
        if (validation(newPost.title) && validation(newPost.body)) {
            await ModificarPost(id, newPost)
            setMessage({
                color: 'yellow',
                message: 'Se ha modificado el post'
            })
            setShowingAlert(true)
            history.replace('/')
        } else {
            // Mostrar un cartel indicando el error
            setMessage({
                color: 'red',
                message: 'Los campos no deben estar vacios'
            })
            setShowingAlert(true)
            console.log('Falto completar algo');
        }
    }

    function validation(item) {
        item = item.trim() 
        if (item !== '' || undefined) {
            return true
        } else {
            return false
        }
    }

    return (
        <div className="grid grid-cols-1 justify-content-start place-content-center mt-14">
            <div className="rounded border p-4 shadow-lg sm:mx-20">
                <h1 className="text-center font-bold tituloPost text-3xl">Modificación del Post </h1>
                <hr />
                <div className="">
                    <h1 className="font-semibold tituloPost">Modificar el Título*</h1>
                    <textarea className="border mt-1 w-full" type="text" name="title" value={newPost.title} onChange={OnChange} />
                    <hr />
                </div>
                <div className="">
                    <h1 className="font-semibold tituloPost">Modificar la noticia*</h1>
                    <textarea className="m-1 border-2 w-full h-60" type="text" name="body" value={newPost.body} onChange={OnChange} />
                    <button onClick={Submit} className="w-full p-2 rounded-md bg-yellow-500 text-yellow-100 font-semibold hover:bg-yellow-700">Modificar</button>
                </div>
            </div>
        </div>
    )
}

