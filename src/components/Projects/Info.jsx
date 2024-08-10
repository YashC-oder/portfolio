import styles from './Info.module.css';
export default function Info({heading,description,link}){
    return (
      <div className={styles.body}>
        <a href={link} className={styles.heading}>
          <h2 >{heading}</h2>
        </a>
        <ul>
          {description.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
      </div>
    );
}