

const Card = (props) => {
  return (
    <button className="bg-blue-600 px-2 py-1 rounded-md">
        {props.category}
    </button>
  )
}

export default Card