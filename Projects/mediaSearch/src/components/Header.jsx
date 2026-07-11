import {Link, NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-white text-black flex justify-between items-center px-10 py-4 border-b-2 border-gray-300">
        <Link to='/' className="text-xl font-bold cursor-pointer">MediaSearch</Link>
        <div className="flex gap-6 text-gray-700">
            <NavLink className={({isActive}) =>`cursor-pointer ${isActive ? "text-orange-600" : "text-black"}`} to='/'>Search</NavLink>
            <NavLink className={({isActive}) =>`cursor-pointer ${isActive ? "text-orange-600" : "text-black"}`} to='/collections'>Collection</NavLink>
        </div>
    </div>
  )
}

export default Header