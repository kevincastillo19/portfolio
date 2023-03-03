import styles from './cardSquare.module.scss';

type props ={
    bigText:string,
    label:string
}
export const CardSquare = ({bigText, label}:props) => (
    <div className={styles.cardSquareContainer}>
        <h2 className={styles.cardSquareBigText}>{bigText}</h2>
        <h3 className={styles.cardSquareLabel}>{label}</h3>
    </div>
)