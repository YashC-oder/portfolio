import styles from './Input.module.css';

export default function Input({ label, id, error,isMessage = false,...props }) {
    return (
      <div className={styles.inputField}>
        <label htmlFor={id}>{label}</label>
        {isMessage && <textarea id={id} {...props} />}
        {!isMessage && <input id={id} {...props} />}
        <div className={styles.error}>{error && <p>{error}</p>}</div>
      </div>
    );
}
