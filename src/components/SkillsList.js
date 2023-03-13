function SkillsList(props){

    return props.data.map((skill) => <li className="skillsstyle">{skill}</li>)
}
export default SkillsList;