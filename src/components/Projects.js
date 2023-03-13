import projects from "../json/projects.json"
import { Link } from "react-router-dom"

export default function Projects() {
    return(
    <div>
        <div className="projectsection">
            <br></br>
            <h1>Projects</h1>
            <br></br>
            <br></br>
        </div>
        <div className="projectcontainer">
            {projects.map((project) =>  (
                    <div className="projectcard" key={project.name}>
                        <h3>{project.name} </h3>
                        <br></br>
                        <img className="projectimage" src={project.image} alt="{project.altname}"/>
                        <p className="projectdescription">{project.description}</p>
                        <br></br>
                        <div className="projectlinkcontainer">
                            <Link className="projectlink" to={project.github} target="_blank">Github</Link>
                            <Link className="projectlink" to={project.live} target="_blank">Live Site</Link>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="projectsection">
            <br></br>
            <br></br>
        </div>
    </div>)
}