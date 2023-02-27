import styles from './cardStyles.module.scss'
import buttonArrow from '../../assets/img/icons/button-arrow.svg'
type props = {
    icon: string
    color: string
    title: string
    caption: string
    buttonText?: string
    buttonAction?: () => void
}
export const Card = ({
    icon,
    color,
    title,
    caption,
    buttonText,
    buttonAction,
}: props) => {
    return (
        <div className={`${styles['card-' + color]} ${styles.cardContainer}`}>
            <img className={styles.cardIcon} src={icon} alt={title} />
            <h4 className={styles.titleLabel}>{title}</h4>
            <p className={styles.caption}>{caption}</p>
            {buttonText && (
                <button
                    className={`${styles['cardButton-' + color]}`}
                    onClick={() => buttonAction}
                >
                    <span>{buttonText}</span>
                    <img
                        src={buttonArrow}
                        alt={buttonText}
                        className={`${styles['buttonIcon-' + color]}`}
                    />
                </button>
            )}
        </div>
    )
}
