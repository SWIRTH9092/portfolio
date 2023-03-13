import { Link } from "react-router-dom"
import navbars from "../json/nav.json"

function Header(props) {
  return (
    <div className="headercontainer">
      <h1 className="mainheader">Sue Wirth's Portfolio</h1>
      <nav className="navcontainer">
          {navbars.map((navbar) =>  (
              <Link to={navbar.link} target={navbar.target} className="navbar" key={navbar.name}>{navbar.name}</Link>
          ))}
      </nav> 
      <br></br>
    </div>
  )
}

export default Header