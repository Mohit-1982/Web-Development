import Contact from './components/Contact'
import Home from './components/Home'
import Help from './components/Help'
import About from './components/About'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="flex justify-between bg-black h-screen w-full text-white">
      
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/help' element={<Help />} />
      </Routes>

    </div>
  )
}

export default App