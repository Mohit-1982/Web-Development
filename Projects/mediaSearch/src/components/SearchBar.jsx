

const SearchBar = () => {
  return (
        <form className="flex justify-center items-center bg-white text-black py-6">
            <input className="h-13 p-3 border w-1/2 outline-none rounded-tl-xl rounded-bl-xl text-lg border-r-0" type="text" placeholder="Search photos, GIFs, videos - try 'cyberpunk'" />
            <button className="h-13 text-gray-200 text-lg bg-blue-600 p-3 rounded-tr-xl rounded-br-xl">Search</button>
        </form>
  )
}

export default SearchBar