import SkillCard from "./SkillCard";
import styles from './Skills.module.css';
import skillData from "./source";
export default function Skills(){
    return <div className={styles.body}>
        <h1>Skills</h1>
        <div className={styles.skillCardList}>
            {skillData.map((skill, index) => (
                <SkillCard key={index} imgSrc={skill.imgSrc} title={skill.title} />
            ))}
        </div>
    </div>
}