function SkillsList(props){

    return props.data.map((skill) => <p className="skillsstyle">{skill}</p>)
}
export default SkillsList;