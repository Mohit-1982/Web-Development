import Header from '../components/Header.jsx'
import SearchBar from "../components/SearchBar.jsx"
import Tabs from "../components/Tabs.jsx"
import ResultGrid from "../components/ResultGrid.jsx"

const HomePage = () => {
  return (
    <div>
        <Header />
        <SearchBar />
        <Tabs />
        <ResultGrid />
    </div>
  )
}

export default HomePage