import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';
import checkMarkLight from '../../assets/checkmark-light.svg';
import checkMarkDark from '../../assets/checkmark-dark.svg';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
     const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkLight : checkMarkDark ;
    return ( 
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>
            Skills
        </h1>
        <div className={styles.skillsList}>
            <SkillList
                src={checkMarkIcon}
                skill="HTML"
            />
            <SkillList
                src={checkMarkIcon}
                skill="CSS"
            />
            <SkillList
                src={checkMarkIcon}
                skill="JavaScript"
            />
            <SkillList
                src={checkMarkIcon}
                skill="TypeScript"
            />
            <SkillList
                src={checkMarkIcon}
                skill="Node"
            />
        </div>
        <hr />
        <div className={styles.skillsList}>
        <SkillList
                src={checkMarkIcon}
                skill="React"
            />
            <SkillList
                src={checkMarkIcon}
                skill="express"
            />
            <SkillList
                src={checkMarkIcon}
                skill="next.js"
            />
            <SkillList
                src={checkMarkIcon}
                skill="remix"
            />
            <SkillList
                src={checkMarkIcon}
                skill="graphql"
            />
        </div>
    </section>
    );
}

export default Skills;