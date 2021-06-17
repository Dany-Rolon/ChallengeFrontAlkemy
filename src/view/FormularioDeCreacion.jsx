import { useState } from "react"

export default function FormularioDeCreacion(){

    const [newPost, setNewPost] = useState({
        titulo:'',
        contenido:''
    })

    return(
        <div className="grid grid-cols-1 justify-items-center place-content-center">
            <div className=" border rounded-md">

            </div>
        </div>
    )
}