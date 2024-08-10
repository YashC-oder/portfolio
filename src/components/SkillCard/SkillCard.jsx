import PropTypes from 'prop-types';
import styles from './SkillCard.module.css';

function SkillCard({ imgSrc, title }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <img src={imgSrc} alt={title} />
            </div>
            <h2 className={styles.cardTitle}>{title}</h2>
        </div>
    );
}

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired   
};

export default SkillCard;
