import styles from './_feedProyect.module.scss'
import { Badge } from '../Badge'
import '../../theme/utils.scss'
import WebViewer from '../layouts/WebViewer'
import { useImageProject } from '../../hooks/useImageProject';

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
    const {image:imagePath, loading} = useImageProject(image)

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
                <WebViewer image={imagePath} loading={loading}/>
            </div>
        </>
    )
}
