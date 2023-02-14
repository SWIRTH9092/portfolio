import { Link } from "react-router-dom"
import navbars from "../json/nav.json"

function Header(props) {
  return (
    <div className="headercontainer">
      <nav className="navcontainer">
          {navbars.map((navbar) =>  (
              <Link to={navbar.link} target={navbar.target} className="navbar" key={navbar.name}>{navbar.name}</Link>
          ))}
      </nav> 
      <h1 className="mainheader">Sue Wirth's Portfolio</h1>
    </div>
  )
}

export default Header