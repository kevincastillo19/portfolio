import { Feed } from '../../components/Feed'
import styles from './homeStyles.module.scss'
import { Card } from '../../components/Card/index'
import laptopIcon from '../../assets/img/icons/laptop-icon.svg'
export const Home = () => {
    const CAPTION_TEXT =
        "I'm a System engineer with more than three years of experience in Software development, currently I'm working as a Fullstack developer. In addition to this, I have experience in the graphic design area, such as Design UX/UI and others."

    return (
        <>
            <Feed
                label="Hello I'm Kevin Castillo"
                title="Software Developer"
                caption={CAPTION_TEXT}
            />
            <section id="about" className={styles.container}>
                <div className={styles.graySquare} />
                <div className={styles.blackSquare} />
                <div className={styles.cardsFrame}>
                  <Card
                      icon={laptopIcon}
                      color="gray"
                      title="FullStack developer"
                      caption="I’m System Engineer and work as a fullStack developer. "
                      buttonText='Know more'
                      buttonAction={()=> console.log("know more fullstack")}
                  />
                </div>
            </section>
        </>
    )
}
