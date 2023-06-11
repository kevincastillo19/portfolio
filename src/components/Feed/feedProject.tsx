import styles from './_feedProyect.module.scss'
import { Badge } from '../Badge'
import '../../theme/utils.scss'
type props = {
    title: string
    caption: string
    label?: string
    image: string
    technologies: Array<string>
}
export const FeedProject = ({ title, caption, image, technologies }: props) => {
    const renderTechnologies = () => {
        return technologies.map((tech) => (
            <Badge key={`tech${tech}`} text={tech} />
        ))
        }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.data}>
                    {/* <span className={styles.titleLabel}>{label}</span> */}
                    <h1 className={styles.title}>{title}</h1>
                    <p className={'caption'}>{caption}</p>
                    <div className={styles.technologiesContainer}>
                        {renderTechnologies()}
                    </div>
                </div>
            </div>
        </>
    )
}
