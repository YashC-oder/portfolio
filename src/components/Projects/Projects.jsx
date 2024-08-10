import { useEffect, useRef } from 'react';
import Info from "./Info";
import styles from './Project.module.css';

const infoData = [
    {
        heading: 'Zoom Clone',
        description: [
            'A video conferencing application similar to Zoom, built using Flutter. It allows users to create and join video meetings seamlessly.',
            'Technologies Used: Flutter Firebase, Jitsi Meet',
            'API Used: Google Login for authentication, Meeting Records for saving meeting details'
        ],
        link:'https://github.com/YashC-oder/zoom'
    },
    {
        heading: 'Weather Application',
        description: [
            'An application that provides real-time weather information based on the user’s current location. It fetches weather data from the OpenWeather API.',
            'Technologies Used: Flutter',
            'API: OpenWeather API',
        ],
        link:'https://github.com/YashC-oder/weatherapp'
    }
];

export default function Projects() {
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
            <h1>Projects</h1>
            <div className={styles.content}>
                {infoData.map((item, index) => (
                    <div
                        key={index}
                        className={styles.item}
                        ref={el => itemsRef.current[index] = el}
                    >
                        <Info heading={item.heading} description={item.description} link={item.link}/>
                    </div>
                ))}
            </div>
        </div>
    );
}
