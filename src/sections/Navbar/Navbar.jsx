import styles from './NavbarStyles.module.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import menuDark from '../../assets/menu-dark.svg'
import menuLight from '../../assets/menu-light.svg'
import { useTheme } from '../../common/ThemeContext';

function Navbar(){
    const { theme } = useTheme();
    const menuIcon = theme === 'light' ? menuDark : menuLight ;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <section id='navbar' className={styles.container}>
            <h3 className={styles.logo}>Ali Abbas</h3>
            <ul className={styles.navlinks}>
                <li><a href="#hero">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className={styles.hamburgerMenu}>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <img src={menuIcon} alt="hamburger-menu" />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                    
                >
                    <MenuItem onClick={handleClose}><a style={{color:'black'}} href="#hero">About</a></MenuItem>
                    <MenuItem onClick={handleClose}><a style={{color:'black'}} href="#projects">Projects</a></MenuItem>
                    <MenuItem onClick={handleClose}><a style={{color:'black'}} href="#skills">Skills</a></MenuItem>
                    <MenuItem onClick={handleClose}><a style={{color:'black'}} href="#contact">Contact</a></MenuItem>
                </Menu>
            </div>
        </section>
    );
}

export default Navbar;