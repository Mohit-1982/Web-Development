import { useDispatch, useSelector} from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice.js";
import {setTab} from '../redux/features/collectionSlice.js'


const Card = (props) => {

  const dispatch = useDispatch();
  const active = useSelector((state) => state.search.activeTab)

  return (
    <button onClick={() => {
      dispatch(setActiveTab(props.category))
      props.category === 'Photos'
      ? dispatch(setTab('photo'))
      : props.category === 'Videos'
      ? dispatch(setTab('video'))
      : dispatch(setTab('gif'))
    }}className={`${active === props.category ? "bg-blue-600" : "bg-gray-600"} active:scale-95 transition px-2 py-1 rounded-md`}>
        {props.category}
    </button>
  )
}

export default Card