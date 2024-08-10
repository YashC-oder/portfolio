import { useEffect, useRef } from 'react';
import Info from "./Info";
import styles from './About.module.css';

const infoData = [
  {
    heading: "Education",
    description:
      "Currently pursuing an IT course at Bhagwan Parshuram Institute of Technology, affiliated with Guru Gobind Singh Indraprastha University ",
  },
  {
    heading: "Skills",
    description:
      "Proficient in Data Structures and Algorithms (200+ problems solved on LeetCode). Experienced with technologies such as Flutter, React, Node.js, MongoDB, and Firebase.",
  },
  {
    heading: "Achievements",
    description:
      "Managed to transition from EEE to IT in college due to strong academic performance, showcasing adaptability and commitment.",
  },
  {
    heading: "Goals",
    description:
      "Aiming to leverage my skills in software development to contribute to impactful projects and continuously enhance my expertise in emerging technologies.",
  },
];

export default function About() {
    const itemsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                }
            });
        }, { threshold: 0.1 });

        itemsRef.current.forEach(item => {
            if (item) observer.observe(item);
        });

        return () => {
            itemsRef.current.forEach(item => {
                if (item) observer.unobserve(item);
            });
        };
    }, []);

    return (
        <div className={styles.body}>
            <h1>About</h1>
            <div className={styles.content}>
                {infoData.map((item, index) => (
                    <div
                        key={index}
                        className={styles.item}
                        ref={el => itemsRef.current[index] = el}
                    >
                        <Info heading={item.heading} description={item.description} />
                    </div>
                ))}
            </div>
        </div>
    );
}
