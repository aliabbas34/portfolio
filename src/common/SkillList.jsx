
function SkillList({src, alt, skill}){
    return(
        <span>
            <img src={src} alt={alt} />
            <p>{skill}</p>
        </span>
    )
}

export default SkillList;