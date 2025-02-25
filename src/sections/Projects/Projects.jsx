import styles from './ProjectsStyles.module.css';
import viber from '../../assets/viberr.png'
import ProjectCard from '../../common/ProjectCard';
function Projects(){
    return(
        <section id='projects' className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={styles.projectContainer}>
            <ProjectCard
                src={viber}
                link="github-link"
                h3="viberr"
                p="Streaming App"
            />
            <ProjectCard
                src={viber}
                link="github-link"
                h3="viberr"
                p="Streaming App"
            />
            <ProjectCard
                src={viber}
                link="github-link"
                h3="viberr"
                p="Streaming App"
            />
            </div>
        </section>
    )
}

export default Projects;