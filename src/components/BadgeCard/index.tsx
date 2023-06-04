import styles from './_badgeCard.module.scss';

type props ={
    bigText:string,
    label:string
}

export const BadgeCard = ({bigText, label}:props) => (
    <div className={styles.badgeContainer}>
        <h4 className={styles.badgeBigText}>{bigText}</h4>
        <span className={styles.badgeLabel}>{label}</span>
    </div>
)