import skills from "../json/skills.json"
import SkillsList from "./SkillsList"

export default function Skills() {
    return(
    <div className="skillscontainer">
        {skills.map((skill) =>  (
            <div className="skillslist" key={skill.topic}>
                <dl><b><p>{skill.topic} </p></b>
                    <SkillsList data={skill.skills} />
                </dl>
                <br></br>
            </div>
            ))
        }
    </div>)
}