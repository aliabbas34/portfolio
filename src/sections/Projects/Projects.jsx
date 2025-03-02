import styles from './ProjectsStyles.module.css';
// import viber from '../../assets/viberr.png'
import ProjectCard from '../../common/ProjectCard';
import jsLogo from '../../assets/javascript-svgrepo-com.svg';
import reactLogo from '../../assets/react-svgrepo-com.svg';

function Projects(){
    const projOneIcons=[
        {
            icon:jsLogo,
            alt:"JavaScript",
        },
        {
            icon: reactLogo,
            alt:"React",
        }
    ];
    return(
        <section id='projects' className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={styles.projectContainer}>
            
                <ProjectCard
                    projName="Project Title"
                    projDescription="this is a project description"
                    link="github.com"
                    icons={projOneIcons}
                />
                <ProjectCard
                    projName="Project Title"
                    projDescription="this is a project description"
                    link="github.com"
                    icons={projOneIcons}
                />
                <ProjectCard
                    projName="Project Title"
                    projDescription="this is a project description"
                    link="github.com"
                    icons={projOneIcons}
                />
                <ProjectCard
                    projName="Project Title"
                    projDescription="this is a project description"
                    link="github.com"
                    icons={projOneIcons}
                />
                <ProjectCard
                    projName="Project Title"
                    projDescription="this is a project description"
                    link="github.com"
                    icons={projOneIcons}
                />
                <ProjectCard
                    projName="Project Title"
                    projDescription="this is a project description"
                    link="github.com"
                    icons={projOneIcons}
                />
            </div>
        </section>
    )
}

export default Projects;