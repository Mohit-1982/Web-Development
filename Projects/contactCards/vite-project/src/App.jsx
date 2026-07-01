import { Share } from 'lucide-react';

function App(props) {
  return (
      <div className="bg-amber-400 flex items-start justify-between ml-5 mt-5 rounded-2xl w-70">
          <div className="h-58 top bg-amber-400 flex items-start justify-between ml-5 mt-5 rounded-2xl">

        <div className='h-full flex justify-center flex-col m-1 p-2'>
          <img className='w-20 h-20 object-cover rounded-full' src={props.people.image} alt={props.people.name} />

          <h2 className='text-3xl font-semibold'>{props.people.name}</h2>
          <h3 className='text-md font-semibold'>{props.people.profession}</h3>

          <div>
            <button className='btn'>{props.people.skills[0]}</button>
            <button className='btn'>{props.people.skills[1]}</button>
          </div>
        </div>
        <button className='m-2 hover:scale-110 active:scale-95 transition-transform duration-100'>
          <Share size={16} color="#000000" />
        </button>

      </div>
      </div>
  )
}

export default App; 