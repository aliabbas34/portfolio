import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/CV_Ali_Abbas_2024.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero(){
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon ;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark ;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark ;
    const githubIcon = theme === 'light' ? githubLight : githubDark ;

    return (
        <section id="hero" className={styles.container}> 
            <div className={styles.colorModeContainer}>
                <img 
                    className={styles.hero} 
                    src={heroImg} 
                    alt="Profile picture of Ali Abbas" 

                />
                <img
                    className={styles.colorMode} 
                    src={themeIcon} 
                    alt="Color mode icon" 
                    onClick={toggleTheme}
                />
            </div>
            <div className={styles.info}>
                <h1>
                    Ali
                    <br />
                    Abbas
                </h1>
                <h2>
                    Full-stack developer
                </h2>
                <span>
                    <a href="https://x.com/Er_AliAbbas" target="_blank">
                        <img src={twitterIcon} alt="Twitter icon" />
                    </a>
                    <a href="https://github.com/aliabbas34" target="_blank">
                        <img src={githubIcon} alt="Github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/ali-abbas-8025b71bb/" target="_blank">
                        <img src={linkedinIcon} alt="LinkedIn icon" />
                    </a>
                </span>
                <p className={styles.description}>
                    With a passion for developing modern web apps for commercial businesses.
                </p>
                <a href={CV} download>
                    <button className="hover" >
                        Resume
                    </button>
                </a>
            </div>
        </section>
    );
}

export default Hero; 