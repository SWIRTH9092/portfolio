import { Link } from "react-router-dom"
import navbars from "../json/nav.json"

function Header(props) {
  return (
    <div class="headercontainer">
      <nav class="navcontainer">
          {navbars.map((navbar) =>  (
              <Link to={navbar.link} target={navbar.target} class="navbar">{navbar.name}</Link>
          ))}
      </nav> 
      <h1 class="mainheader">Sue Wirth's Portfolio</h1>
    </div>
  )
}

export default Header