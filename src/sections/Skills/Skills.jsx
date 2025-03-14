import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';

function Skills() {
    return ( 
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>
            Skills
        </h1>
        <div className={styles.skillsList}>
            <SkillList
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"}
                skill="HTML"
                alt={"HTML icon"}
            />
            <SkillList
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"}
                skill="CSS"
                alt={"CSS icon"}
            />
            <SkillList
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"}
                skill="JavaScript"
                alt={"JavaScript icon"}
            />
            <SkillList
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"}
                skill="TypeScript"
                alt={"TypeScript icon"}
            />
            <SkillList
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"}
                skill="C++"
                alt={"C++ icon"}
            />
        </div>
        <hr />
        <div className={styles.skillsList}>
        <SkillList
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"}
                skill="React"
                alt={"React icon"}
            />
            <SkillList
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"}
                skill="Tailwind css"
                alt={"Tailwind css icon"}
            />
            <SkillList
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"}
                skill="Next.js"
                alt={"Next js icon"}
            />
            {/* <SkillList
                src={checkMarkIcon}
                skill="remix"
            />
            <SkillList
                src={checkMarkIcon}
                skill="graphql"
            /> */}
        </div>
        <hr />
        <div className={styles.skillsList}>
        <SkillList
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"}
                skill="Git"
                alt={"Git icon"}
            />
            <SkillList
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"}
                skill="Github"
                alt={"Github icon"}
            />
            <SkillList
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"}
                skill="VS Code"
                alt={"VS Code icon"}
            />
            <SkillList
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"}
                skill="Docker"
                alt={"Docker icon"}
            />
            <SkillList
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"}
                skill="MongoDB"
                alt={"MongoDB icon"}
            />
            <SkillList
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"}
                skill="PostgreSql"
                alt={"PostgreSql icon"}
            />
        </div>
    </section>
    );
}

export default Skills;

// programmingLanguages: [
//       {
//         name: "HTML5",
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
//       },
//       {
//         name: "CSS3",
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
//       },
//       {
//         name: "JavaScript",
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
//       },
//       {
//         name: "TypeScript",
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
//       },
//       {
//         name: "C++",
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
//       },
//       {
//         name: "Python",
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
//       },
//       {
//         name: "Java",
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
//       },
//     ],
//     frameworks: [
//       {
//         name: "React",
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//       },
//       {
//         name: "Next.js",
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
//       },
//       {
//         name: "Vue.js",
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
//       },
//       {
//         name: "Svelte",
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
//       },
//       {
//         name: "Tailwind CSS",
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
//       },
//       {
//         name: "Bootstrap",
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
//       },
//       {
//         name: "Material UI",
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
//       },
//     ],
//     tools: [
//       {
//         name: "Git",
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
//       },
//       {
//         name: "GitHub",
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
//       },
//       {
//         name: "VS Code",
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
//       },
//       {
//         name: "Docker",
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
//       },
//       {
//         name: "Firebase",
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
//       },
//       {
//         name: "MongoDB",
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
//       },
//       {
//         name: "PostgreSQL",
//         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
//       },
//     ],