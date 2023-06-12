import Loading from '../../UI/loading'
import styles from './_webviewer.module.scss'

type props = {
    image:string
    loading:boolean
}

const WebViewer = ({image, loading}:props) => {
  return (
    <div className={styles.container}>
        <div className={styles.browserNav}>
            <div id={styles.closeButton} className={styles.browserAction}></div>
            <div id={styles.expandButton} className={styles.browserAction}></div>
            <div id={styles.minimizeButton} className={styles.browserAction}></div>
            <div className={styles.urlLayout}></div>
        </div>
        <div className={styles.body} style={{backgroundImage: `url(${image})`}}>
          { loading && (
              <Loading/>
          )}
        </div>
    </div>
  )
}

export default WebViewer