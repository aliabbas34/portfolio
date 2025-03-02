import githubLight from '../assets/github-light.svg';
import githubDark from '../assets/github-dark.svg';
import { useTheme } from '../common/ThemeContext';

function ProjectCard({ link, src, h3, p, projDescription, projName, icons }){

    const { theme } = useTheme();
    const githubIcon = theme === 'light' ? githubLight : githubDark ;

    return(
        <div id="projCard">
            <h3 id="projTitle">{projName}</h3>
            <div id="icons">
                {icons.map((data)=> <img id="icon" src={data.icon} alt={data.alt} />
                )}
            </div>
            <p id="projDesc">{projDescription}</p>
            <a id="gitLink" href={link} target='_blank'>
                <img src={githubIcon} id="githubIcon" alt="github-icon" />
                <p style={{margin:"auto"}}>visit</p>
            </a>
        </div>
    );
    // return(
    //     <a href={link} target='_blank'>
    //         <img src={src} className="hover" alt={`${h3} logo`} />
    //         <h3>{h3}</h3>
    //         <p>{p}</p>
    //     </a>
    // );
}

export default ProjectCard;