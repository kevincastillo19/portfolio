
import styles from './slideStyles.module.scss';

type props = {
    image:string,
    title:string,
    buttonText:string,
    buttonAction: ()=>void
}

export const Slide = ({image, title, buttonText, buttonAction}: props) => {
  return (
    <div className={styles.slideContainer}>
        <img src={image} alt={title} className={styles.slideImage} />
        <h3 className={styles.titleLabel}>{title}</h3>
        <button className={styles.buttonAction}
            onClick={()=>buttonAction}>
            {buttonText}
        </button>
    </div>
  )
}
