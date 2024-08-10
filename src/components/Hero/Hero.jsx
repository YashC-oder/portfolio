import { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import { SiLeetcode } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import ResumeModal from './ResumeModel';
import myImage from './yashProfile.png';

const words = ['Programmer', 'Developer', 'Coder'];
const typingSpeed = 100;
const deletingSpeed = 80;
const delay = 1500;

export default function Hero() {
    const [displayedWord, setDisplayedWord] = useState('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [isBlinking, setIsBlinking] = useState(false);

    useEffect(() => {
        let typingInterval;
        const currentWord = words[currentWordIndex];

        if (!isDeleting) {
            typingInterval = setInterval(() => {
                setDisplayedWord((prev) => {
                    const newDisplay = currentWord.substring(0, prev.length + 1);
                    if (newDisplay === currentWord) {
                        clearInterval(typingInterval);
                        setIsBlinking(true);
                        setTimeout(() => setIsBlinking(false), 1000);
                        setTimeout(() => setIsDeleting(true), delay);
                    }
                    return newDisplay;
                });
            }, typingSpeed);
        } else {
            typingInterval = setInterval(() => {
                setDisplayedWord((prev) => {
                    const newDisplay = currentWord.substring(0, prev.length - 1);
                    if (newDisplay === '') {
                        clearInterval(typingInterval);
                        setIsBlinking(false); 
                        // setTimeout(() => {
                        //     setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                        //     setIsDeleting(false);
                        // }, delay);

                        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                        setIsDeleting(false);
                    }
                    return newDisplay;
                });
            }, deletingSpeed);
        }

        return () => clearInterval(typingInterval);
    }, [isDeleting, currentWordIndex]);

    const handleResumeClick = () => {
        setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
      <div className={styles.hero}>
        <div className={styles.info}>
          <h2>
            <span>नमस्ते</span>, Welcome In My Feed
          </h2>
          <h1>
            I'm a{" "}
            <span
              className={`${styles.typingContainer} ${
                isBlinking ? styles.blink : ""
              }`}
            >
              <span className={styles.typing}>{displayedWord}</span>
            </span>
          </h1>
          <p className={styles.description}>
            I'm a passionate software developer with expertise in ReactJS and
            Flutter. With a strong foundation in DSA and proficiency in Java,
            dedicated to creating innovative web and mobile applications.
            Currently pursuing an IT course with a remarkable CGPA of 9, and
            continue to expand my skills and knowledge in the tech industry.
          </p>
          <div className={styles.social}>
            <h3>Available on</h3>
            <ul className={styles.socialButtons}>
              <li>
                <a
                  href="https://leetcode.com/u/Yash-mehra/"
                  className={styles.links}
                >
                  <SiLeetcode className={styles.socialButton} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/YashC-oder"
                  className={styles.links}
                >
                  <AiFillGithub className={styles.socialButton} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yash-mehra-9231b7288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className={styles.links}
                >
                  <FaLinkedin className={styles.socialButton} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/.yash.mehra.?igsh=a3MycjgzOGI1YmNv"
                  className={styles.links}
                >
                  <FaInstagram className={styles.socialButton} />
                </a>
              </li>
            </ul>
          </div>
          <button className={styles.resumeButton} onClick={handleResumeClick}>
            Resume
          </button>
        </div>
        <div className={styles.imageContainer}>
          <img src={myImage} alt="Yash Mehra" className={styles.image} />
        </div>
        {isModalOpen && <ResumeModal onClose={handleCloseModal} />}
      </div>
    );
}
