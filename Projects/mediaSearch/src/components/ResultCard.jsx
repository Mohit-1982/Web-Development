

const ResultCard = (props) => {
  return (
    <div className="w-60 h-70 text-black rounded-xl shadow-lg">
        <img className="object-cover rounded-xl w-full h-45" src={props.url} alt="image" />
        <div className="mt-4 mx-2">
            <div className="mt-1 leading-tight">
                <h1 className="font-semibold">{"PixaBay"}</h1>
                <h2 className="text-gray-600 text-sm">{"Video"}</h2>
            </div>
            <div className="flex justify-between items-center px-1 py-2">
                <a className="underline text-sm" href="" target="_blank">Open</a>
                <button className="bg-green-200 text-green-700 py-1 px-2 text-sm rounded cursor-pointer">Save</button>
            </div>
        </div>
    </div>
  )
}

export default ResultCard