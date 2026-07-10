

const Header = () => {
  return (
    <div className="bg-white text-black flex justify-between items-center px-10 py-4 border-b-2 border-gray-300">
        <h1 className="text-xl font-bold cursor-pointer">MediaSearch</h1>
        <div className="flex gap-6 text-gray-700">
            <p className="cursor-pointer">Search</p>
            <p className="cursor-pointer">Collection</p>
        </div>
    </div>
  )
}

export default Header