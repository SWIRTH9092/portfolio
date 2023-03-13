import skills from "../json/skills.json"
import SkillsList from "./SkillsList"

export default function Skills() {
    return(
    <div>
        <div className="skillssection">
            <br></br>
            <h1>Skills</h1>
            <br></br>
            <br></br>
        </div>
        <div>
            <div className="skillscontainer">
                {skills.map((skill) =>  (
                    <div className="skillslist"> 
                        <dl><b><ul>{skill.topic} </ul></b><br></br>
                            <SkillsList data={skill.skills} keyid="skill.skills" />
                        </dl>
                        <br></br>
                    </div>
                    ))
                }
            </div>
        </div>
        <div className="skillssection">
            <br></br>
            <br></br>
        </div>
    </div>)
}