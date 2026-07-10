import {Link} from 'react-router-dom' 

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">about</Link>
      <Link to="/contact">contack</Link>
      <Link to="/help">Help</Link>
    </div>
  )
}

export default Navbar