import githubLight from '../assets/github-light.svg';
import githubDark from '../assets/github-dark.svg';
import { useTheme } from '../common/ThemeContext';

function ProjectCard({ link, projDescription, projName, icons }){

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
}

export default ProjectCard;