
import buttonArrow from '../../assets/img/icons/button-arrow.svg'
import styles from './slideStyle.module.scss';

type props = {
    image:string,
    title:string,
    buttonText:string,
    buttonAction: ()=>void
}

export const Slide = ({image, title, buttonText, buttonAction}: props) => {
  return (
    <div className={styles.slideContainer}>
      <div className={styles.slideSquare}>
        <img src={image} alt={title} className={styles.slideImage} />        
      </div>
        <h3 className={styles.titleLabel}>{title}</h3>
        {buttonText && (
                <button
                    className={`${styles.cardButtonText} ${styles['cardButton-gray']}`}
                    onClick={() => buttonAction}
                >
                    <span>{buttonText}</span>
                    <img
                        src={buttonArrow}
                        alt={buttonText}
                        className={`${styles['buttonIcon-gray']}`}
                    />
                </button>
          )}
    </div>
  )
}
