import { useDispatch, useSelector } from "react-redux";
import {addCard, removeCard} from "../redux/features/collectionSlice.js"


const ResultCard = (props) => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.collection.data);

    function removeFromCollection(item) {
        let newData = data.filter((ele) => ele.id !== item.id);
        localStorage.setItem('collection', JSON.stringify(newData));
        dispatch(removeCard(newData));
    }

    function addToCollection(item) {
        const data = JSON.parse(localStorage.getItem('collection')) || [];

        if (data.some((ele) => ele.id === item.id)) return;
        const newData = [...data, item];
        localStorage.setItem('collection', JSON.stringify(newData));
        dispatch(addCard(newData));
    }

    function isSaved() {
        return data.some((item) => item.id === props.result.id)
    }

    return (
        <div className="w-60 h-72 flex flex-col shrink-0 text-black rounded-xl shadow-lg  overflow-hidden mb-5">
            {props.result.type === 'photo' || props.result.type === 'gif' ? <img className="object-cover object-center rounded-xl w-full h-44" src={props.result.thumbnail} alt="image" /> : <video autoPlay loop muted className="object-cover object-center rounded-xl w-full h-44" src={props.result.thumbnail}></video>}
            <div className="mt-4 mx-2">
                <div className="mt-1 leading-tight">
                    <h1 className="font-semibold truncate">{props.result.username}</h1>
                    <h2 className="text-gray-600 text-sm">{props.result.type}</h2>
                </div>
                <div className="flex justify-between items-center px-1 py-2">
                    <a className="underline text-sm" href={props.result.src} target="_blank"  rel="noopener noreferrer">Open</a>
                    <button className={`${isSaved() ? 'bg-red-200 text-red-700' : 'bg-green-200 text-green-700'} py-1 px-2 text-sm rounded cursor-pointer`} onClick={isSaved() ? () => removeFromCollection(props.result) : () => addToCollection(props.result)}>{isSaved() ? "Remove" : "Save"}</button>
                </div>
            </div>
        </div>
    )
}

export default ResultCard