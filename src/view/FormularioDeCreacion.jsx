import { useState } from "react"

export default function FormularioDeCreacion(){

    const [newPost, setNewPost] = useState({
        titulo:'',
        contenido:''
    })

    function OnChange(e){
        e.preventDefault()
        setNewPost({
            ...newPost,
            [e.target.name] : e.target.value
        })
    }

    function Submit(){
        // Logica para subir el post
        console.log(newPost);
    }

    return(
        <div className="grid grid-cols-1 justify-items-center place-content-center w-screen h-screen">
            <div className="border rounded-md p-4 w-72 shadow-lg">
                <h1 className="text-center font-semibold text-2xl mb-4 border-b w-full">Crear un nuevo Post</h1>
                
                {/* Titulo */}
                <div className="mb-2">
                    <h2 className="text-xl">Titulo</h2>
                    <input onChange={OnChange} name="titulo" value={newPost.titulo} type="text" className="w-full border-b-2 p-0.5" placeholder="Tailwind ¿Mejor que Bootstrap?"/>
                </div>

                {/* Contenido */}
                <div>
                    <h2 className="text-xl">Contenido</h2>
                    <textarea onChange={OnChange} name="contenido" value={newPost.contenido} rows="5" placeholder="Si, definitivamente" className="w-full border-b-2 p-0.5"></textarea>
                </div>

                {/* Boton Crear*/}
                <div>
                    <button onClick={Submit} className="w-full p-2 rounded-md bg-green-500 font-bold text-green-100">Crear</button>
                </div>
            </div>
        </div>
    )
}