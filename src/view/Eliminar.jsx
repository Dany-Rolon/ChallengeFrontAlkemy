import { DeletePost } from '../helpers/PostsHelpers'
import {useHistory} from 'react-router-dom'

export default function Eliminar(props){
    const history = useHistory()
    const id = props.match.params.id
    const titulo = props.match.params.titulo

    async function OnDelete(){
        await DeletePost(id)
        history.replace('/')
    }

    async function OnCancel(){
        history.replace('/')
    }

    return(
        <div className="grid grid-cols-1 mt-40 justify-items-center place-content-center">
            <div className="border shadow-lg p-2 rounded-md mx-4">
                <h3>¿Seguro que quieres eliminar el post <b>{titulo}</b>?</h3>
                <div className="flex w-full mt-2 justify-evenly">
                    <button onClick={OnCancel} className="rounded-md w-full font-semibold border-2 border-blue-500 p-1 m-2 hover:bg-blue-500 hover:text-white">Cancelar</button>
                    <button onClick={OnDelete} className="rounded-md w-full font-semibold border-2 border-red-500 p-1 m-2 hover:bg-red-500 hover:text-white">Eliminar</button>
                </div>
            </div>
        </div>
    )
}