import styles from './NavbarStyles.module.css';

function Navbar(){
    return(
        <section id='navbar' className={styles.container}>
            <h3 className={styles.logo}>Ali Abbas</h3>
            <ul className={styles.navlinks}>
                <li><a href="#hero">About</a></li>
                <li><a href="#skills">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </section>
    );
}

export default Navbar;