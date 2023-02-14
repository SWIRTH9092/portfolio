import projects from "../json/projects.json"
import { Link } from "react-router-dom"

export default function Projects() {
    return(
    <div>
        {projects.map((project) =>  (
                <div key={project.name}>
                    <h3>{project.name} </h3>
                    <img src={project.image}/>
                    <p>{project.description}</p>
                    <div>
                        <Link href={project.github} target="_blank">Github</Link>
                        <Link href={project.live} target="_blank">Live Site</Link>
                    </div>
                </div>
            ))
        }
    </div>)
}