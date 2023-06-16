import Loading from '../../UI/loading'
import styles from './_webviewer.module.scss'

type props = {
    image:string
    loading:boolean,
    url?:string
}

const WebViewer = ({image, loading, url}:props) => {
  return (
    <div className={styles.container}>
        <div className={styles.browserNav}>
            <div id={styles.closeButton} className={styles.browserAction}></div>
            <div id={styles.expandButton} className={styles.browserAction}></div>
            <div id={styles.minimizeButton} className={styles.browserAction}></div>
            <div className={styles.urlLayout}></div>
        </div>
        <a href={url} target='_blank'>
          <div className={styles.body} style={{backgroundImage: `url(${image})`}}>
            { loading && (
                <Loading/>
            )}
          </div>
        </a>
    </div>
  )
}

export default WebViewer