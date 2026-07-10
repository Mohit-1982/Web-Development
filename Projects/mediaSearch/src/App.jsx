import { fetchGifs, fetchPhotos, fetchVideos } from "./api/mediaApi"
import Header from './components/Header.jsx'
import SearchBar from "./components/SearchBar.jsx"
import Tabs from "./components/Tabs.jsx"
import ResultGrid from "./components/ResultGrid.jsx"

const App = () => {
  return (
    <div className="h-screen w-full text-white">
        <Header />
        <SearchBar />
        <Tabs />
        <ResultGrid />
    </div>
  )
}

export default App