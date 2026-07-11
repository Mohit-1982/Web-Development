import { useSelector } from "react-redux";
import TabButton from "./TabButton.jsx"
import { nanoid } from "@reduxjs/toolkit"
import {useLocation} from 'react-router-dom'

const Tabs = () => {
    const media = ["Photos", "Videos", "GIF's"];
    const query = useSelector((state) => state.search.query);
    const location = useLocation();
    const isSearch = (location.pathname === "/");

    return (
        <div className="bg-white p-3 flex justify-between">
            <div className="md:w-1/3 flex gap-5 items-center justify-center">
                {media.map((ele) => {
                    return <TabButton key={nanoid()} category={ele} />
                })}
            </div>
            <h3 className={`${query.trim() !== '' && isSearch ? "block" : "hidden"} mx-7 text-gray-500`}>Results for <span className="font-semibold text-lg text-black">"{query}"</span></h3>
        </div>
    )
}

export default Tabs