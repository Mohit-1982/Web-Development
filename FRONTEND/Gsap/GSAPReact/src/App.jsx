import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const App = () => {

  useGSAP(() => {
    gsap.to(".box", {
      x:500,
      duration:2,
      delay:1,
      borderRadius:"60px",
      rotate:1080
    });
  });

  return (
    <main>
      <div className="box">

      </div>
    </main>
  )
}

export default App