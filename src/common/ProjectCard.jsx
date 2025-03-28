import githubLight from '../assets/github-light.svg';
import githubDark from '../assets/github-dark.svg';
import { useTheme } from '../common/ThemeContext';
import styles from './ProjectCard.module.css';

// eslint-disable-next-line react/prop-types
function ProjectCard({ link, projDescription, projName, icons, imgSrc }){

    const { theme } = useTheme();
    const githubIcon = theme === 'light' ? githubLight : githubDark ;

    return(
        <div className={styles.container}>
            <div className={styles.projCardLeft}>
            <img src={imgSrc} style={{maxWidth:'1000px'}} alt="timer img wide" />
                <h3 style={{textAlign: 'start'}}>{projName}</h3>
                <p style={{textAlign:'start'}}>{projDescription}</p>
                <div id="icons">
                    {icons.map((data)=> <img id="icon" src={data.icon} alt={data.alt} />
                    )}
                </div>
                <a id="gitLink" href={link} target='_blank'>
                    <img src={githubIcon} id="githubIcon" alt="github-icon" />
                    <p style={{margin:"auto"}}>visit</p>
                </a>
            </div>
            {/* <div style={{}}>
                <img src="src\assets\countdown-timer-top-bar.png" alt="timer img wide" />
            </div> */}
            
        </div>
    );
}

export default ProjectCard;