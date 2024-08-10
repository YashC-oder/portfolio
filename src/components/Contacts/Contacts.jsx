import ContactForm from "./ContactForm";
import styles from './Contacts.module.css';

export default function Contacts() {
    return (
        <div className={styles.body}>
            <h1>Contact</h1>
            <p>Please fill out the form below to contact me</p>
            <div className={styles.contactFormContainer}>
                <ContactForm/>
            </div>
        </div>
    );
}
