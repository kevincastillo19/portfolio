import { Feed } from '../../components/Feed'
import { Card } from '../../components/Card'
import { CardSquare } from '../../components/CardSquare'
import { Badge } from '../../components/Badge'
import styles from './homeStyles.module.scss'
import laptopIcon from '../../assets/img/icons/laptop-icon.svg'
import tabletIcon from '../../assets/img/icons/tablet-icon.svg'
import ruleIcon from '../../assets/img/icons/rule-icon.svg'

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
                <article className={styles.cardsFrame}>
                  <Card
                      icon={laptopIcon}
                      color="gray"
                      title="FullStack developer"
                      caption="I’m System Engineer and work as a fullStack developer. "
                      buttonText='Know more'
                      buttonAction={()=> console.log("know more fullstack")}
                  />
                  <Card
                      icon={tabletIcon}
                      color="primary"
                      title="UX/UI Design"
                      caption="I have experience with UX/UI Design, Let’s start to make a new unicorn."
                      buttonText='Know more'
                      buttonAction={()=> console.log("know more design")}
                  />
                  <Card
                      icon={ruleIcon}
                      color="gray"
                      title="Branding"
                      caption="I have experience with UX/UI Design, Let’s start to make a new unicorn."
                      buttonText='Know more'
                      buttonAction={()=> console.log("know more branding")}
                  />
                </article>
                <article className={styles.badgesFrame}>
                    <CardSquare
                        bigText={"3+"}
                        label={"Years Experience"}
                    />
                <div className={styles.badgeRectangle}>
                    <div className={styles.badgeRow}>
                        <Badge
                            bigText={"6"}
                            label={"Clients"}
                        />
                        <Badge
                            bigText={"10+"}
                            label={"Technologies"}
                        />
                    </div>
                    <div className={styles.badgeRow}>
                        <Badge
                            bigText={"12+"}
                            label={"Completed projects"}
                        />
                        <Badge
                            bigText={"16+"}
                            label={"Achievements"}
                        />
                    </div>
                </div>
                </article>
            </section>
        </>
    )
}
