import { useState, useEffect } from 'react';
import styles from './NavBar.module.css';
import { IoReorderThree, IoClose } from "react-icons/io5";
import { IoIosArrowForward } from 'react-icons/io';

const animateText = (text) => {
  return text.split('').map((char, index) => (
      <span className={styles.animatedText} key={index}>
          {char}
      </span>
  ));
};

export default function NavBar({ homeRef, aboutRef, projectsRef, skillsRef, contactsRef }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [initialLoad, setInitialLoad] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false); 

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        const timeoutId = setTimeout(() => setInitialLoad(false), 1000);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false); 
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={styles.navBar}>
            <div className={`${styles.name} ${initialLoad ? styles.slideInLeft : ''}`}>
                <h1>
                    {animateText('Yash Mehra')}
                    <p>Software developer</p>
                </h1>
            </div>
            <div className={styles.navButtons}>
                {windowWidth > 850 ? (
                    <ul className={`${styles.navButton} ${initialLoad ? styles.slideInRight : ''}`}>
                        <li onClick={() => scrollToSection(homeRef)}>Home</li>
                        <li onClick={() => scrollToSection(aboutRef)}>About</li>
                        <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
                        <li onClick={() => scrollToSection(skillsRef)}>Skills</li>
                        <li onClick={() => scrollToSection(contactsRef)}>Contact</li>
                    </ul>
                ) : (
                    <>
                        <IoReorderThree className={`${styles.optionIcon} ${initialLoad ? styles.slideInRight : ''}`} onClick={toggleMenu} />
                        <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
                            <IoClose className={styles.mobileMenuClose} onClick={toggleMenu} />
                            <br/>
                            <ul>
                                <li onClick={() => scrollToSection(homeRef)}>Home <IoIosArrowForward className={styles.arrowIcon} /></li>
                                <li onClick={() => scrollToSection(aboutRef)}>About <IoIosArrowForward className={styles.arrowIcon} /></li>
                                <li onClick={() => scrollToSection(projectsRef)}>Projects <IoIosArrowForward className={styles.arrowIcon} /></li>
                                <li onClick={() => scrollToSection(skillsRef)}>Skills <IoIosArrowForward className={styles.arrowIcon} /></li>
                                <li onClick={() => scrollToSection(contactsRef)}>Contact <IoIosArrowForward className={styles.arrowIcon} /></li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
