import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'


const App = () => {
  return (
    <div className="h-screen w-full bg-black text-white text-2xl">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App