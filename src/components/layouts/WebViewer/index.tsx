import styles from './_webviewer.module.scss'

type props = {
    image:string
}

const WebViewer = ({image}:props) => {
  return (
    <div className={styles.container}>
        <div className={styles.browserNav}>
            <div id={styles.closeButton} className={styles.browserAction}></div>
            <div id={styles.expandButton} className={styles.browserAction}></div>
            <div id={styles.minimizeButton} className={styles.browserAction}></div>
            <div className={styles.urlLayout}></div>
        </div>
        <div className={styles.body} style={{backgroundImage: `url(${image})`}}></div>
    </div>
  )
}

export default WebViewer