

const Todo = ({ele, removeTodo}) => {

    return (
        <>
            {
                ele.map((prop, idx) => {
                    return (
                        <div key={idx} className="flex justify-between items-center w-xs md:w-xl border mt-5 rounded-2xl py-2">
                            <p className="ml-3 font-semibold text-xl">{prop}</p>
                            <button onClick={() => removeTodo(idx)} className="mr-3 px-4 py-2 font-bold text-black text-xl bg-white rounded-xl hover:scale-110 active:scale-95 transition-transform">Del</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Todo