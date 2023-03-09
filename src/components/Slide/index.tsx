
import buttonArrow from '../../assets/img/icons/button-arrow.svg'
import styles from './_slide.module.scss';
import { Button } from '../Buttons/Button';

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
        <Button
          text={buttonText}
          type="gray"
          icon={buttonArrow}
          action={buttonAction}
        />
    </div>
  )
}
