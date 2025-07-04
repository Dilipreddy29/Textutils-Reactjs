
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = (props) => {
  return (
     <div className="navbar">
        <div className="logo"><Link to="/"><h2>{props.title}</h2></Link></div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          </div>
         
      </div>
  )
}

export default Navbar

Navbar.defaultprops = {
  title: "TextUtils",
    button: "Search"
}
