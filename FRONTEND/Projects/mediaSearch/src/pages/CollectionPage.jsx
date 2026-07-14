import Header from "../components/Header.jsx"
import Tabs from '../components/Tabs.jsx'
import Collection from "../components/Collection.jsx"

const CollectionPage = () => {
  return (
    <div className="h-screen w-full text-white">
        <Header />
        <Tabs />
        <Collection />
    </div>
  )
}

export default CollectionPage