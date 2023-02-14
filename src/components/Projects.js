import projects from "../json/projects.json"
import { Link } from "react-router-dom"

export default function Projects() {
    return(
    <div className="projectcontainer">
        {projects.map((project) =>  (
                <div className="projectcard" key={project.name}>
                    <h3>{project.name} </h3>
                    <img className="projectimage" src={project.image}/>
                    <p className="projectdescription">{project.description}</p>
                    <div className="projectlinkcontainer">
                        <Link className="projectlink" href={project.github} target="_blank">Github</Link>
                        <Link className="projectlink"href={project.live} target="_blank">Live Site</Link>
                    </div>
                </div>
            ))
        }
    </div>)
}