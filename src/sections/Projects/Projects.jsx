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
            <h1 className='sectionTitle'>Shopify Sections</h1>
            <div className={styles.projectContainer}>
            
                <ProjectCard
                    projName="Urgency Countdown Timer Bar"
                    projDescription="This professionally designed Shopify countdown timer section adds urgency to your store, encouraging customers to act fast before your sale or promotion ends. Perfect for flash sales, seasonal offers, or product launches."
                    link="github.com"
                    icons={projOneIcons}
                    imgSrc={"src/assets/countdown-timer-top-bar.png"}
                />
                <ProjectCard
                    projName="Urgency Countdown Timer Banner"
                    projDescription="This professionally designed Shopify countdown timer section adds urgency to your store, encouraging customers to act fast before your sale or promotion ends. Perfect for flash sales, seasonal offers, or product launches."
                    link="github.com"
                    icons={projOneIcons}
                    imgSrc={"src/assets/countdown-timer-banner.png"}
                />
                {/* <ProjectCard
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
                /> */}
            </div>
        </section>
    )
}

export default Projects;