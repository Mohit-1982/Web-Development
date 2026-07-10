import TabButton from "./TabButton.jsx"

const Tabs = () => {
    const media = ["Photos", "Videos", "GIF's"]
    return (
        <div className="bg-white p-3 flex justify-between">
            <div className="md:w-1/3 flex gap-5 items-center justify-center">
                {media.map((ele) => {
                    return <TabButton category={ele} />
                })}
            </div>
            <h3 className="text-black mx-7">Results for "{"cat"}"</h3>
        </div>
    )
}

export default Tabs