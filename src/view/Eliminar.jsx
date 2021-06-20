import { DeletePost, GetPostsDetalle } from '../helpers/PostsHelpers'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'

export default function Eliminar({ props, setShowingAlert, setMessage }) {
    const history = useHistory()
    const id = props.match.params.id

    useEffect(() => {
        async function VerifyPostExist(){
            let response = await GetPostsDetalle(id)
            if(!response){
                setMessage({
                    color: 'red',
                    message: 'El post que quiere eliminar no existe'
                })
                setShowingAlert(true)
                history.replace('/')
            }
        }
        VerifyPostExist()
    }, [id, history, setMessage, setShowingAlert])

    async function OnDelete() {
        let response = await DeletePost(id)
        if(response){
            setMessage({
                color: 'green',
                message: 'Se elimino un post correctamente'
            })
            setShowingAlert(true)
            history.replace('/')
        } else {
            setMessage({
                color:'red',
                message: 'El post no existe'
            })
            setShowingAlert(true)
            history.replace('/')
        }
    }

    async function OnCancel() {
        history.replace('/')
    }

    return (
        <div className="grid grid-cols-1 mt-40 justify-items-center place-content-center">
            <div className="border shadow-lg p-2 rounded-md mx-4">
                <h3>¿Seguro que quieres eliminar el post?</h3>
                <div className="flex w-full mt-2 justify-evenly">
                    <button onClick={OnCancel} className="rounded-md w-full font-semibold border-2 border-blue-500 p-1 m-2 hover:bg-blue-500 hover:text-white">Cancelar</button>
                    <button onClick={OnDelete} className="rounded-md w-full font-semibold border-2 border-red-500 p-1 m-2 hover:bg-red-500 hover:text-white">Eliminar</button>
                </div>
            </div>
        </div>
    )
}