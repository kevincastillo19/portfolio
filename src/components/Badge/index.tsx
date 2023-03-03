import styles from './badgeStyles.module.scss';

type props ={
    bigText:string,
    label:string
}

export const Badge = ({bigText, label}:props) => (
    <div className={styles.badgeContainer}>
        <h4 className={styles.badgeBigText}>{bigText}</h4>
        <span className={styles.badgeLabel}>{label}</span>
    </div>
)