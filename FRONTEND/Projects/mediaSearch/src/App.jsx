import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'

const App = () => {
  return (
    <div className="h-screen w-full text-white">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/collections' element={<CollectionPage />}/>
      </Routes>
    </div>
  )
}

export default App