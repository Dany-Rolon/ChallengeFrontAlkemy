import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className=" bg-gray-500 sticky top-0">
            <div className="flex justify-around py-4">
                {/* Logo / Nombre de la app */}
                <div className="text-blue-200 font-semibold">
                    AlkemyBlog
                </div>

                {/* Links */}
                <div>
                    <Link to="/" className="text-white mr-4 hover:bg-red-700 p-2">Home</Link>
                    <Link to="/formulariodecreacion" className="text-white hover:bg-red-700 p-2">Crear Post</Link>
                </div>                
            </div>
        </div>
    )
}