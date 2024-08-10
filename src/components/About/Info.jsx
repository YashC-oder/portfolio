import styles from './Info.module.css';
export default function Info({heading,description}){
    return (
      <div className={styles.body}>
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
    );
}