import {Link} from 'react-router-dom'

const Posts = ({ post }) => {
    return (
        <div className="w-full">
            <div className="border-2 p-2 m-2 rounded-md shadow-lg">
                <h1 className="text-center text-md tituloPost">{post.title}</h1>
                <div className="flex mt-2">
                    <Link to={`/detalle/${post.id}`} className="text-center text-blue-500 w-full rounded-md border-2 border-blue-500 m-1 font-semibold hover:bg-blue-700 hover:text-white">Detalle</Link>
                    <Link to={`/formulariodeedicion/${post.id}`} className="text-center text-yellow-700 w-full rounded-md border-2 border-yellow-700 m-1 font-semibold hover:bg-yellow-700 hover:text-white">Modificar</Link>
                    <Link to={`/eliminar/${post.id}`} className="text-center text-red-400 w-full rounded-md border-2 border-red-400 m-1 font-semibold hover:bg-red-700 hover:text-white">Eliminar</Link>
                </div>
            </div>
        </div>
    );
}

export default Posts;