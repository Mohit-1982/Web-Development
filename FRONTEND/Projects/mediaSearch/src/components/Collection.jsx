import { useSelector } from "react-redux";
import ResultCard from "./ResultCard.jsx";

const Collection = () => {
    const data = useSelector((store) => store.collection.data);
    const active = useSelector((state) => state.collection.tab);
    const newData = data.filter((ele) => ele.type === active);

    return (
        <div className="flex shrink-0 flex-wrap gap-5 mx-24 mt-5">
            {newData.map((ele) => {
               return <ResultCard key={ele.id} result={ele} />
            })}
        </div>
    )
}

export default Collection