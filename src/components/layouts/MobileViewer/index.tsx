
import styles from './_mobileViewer.module.scss'
import phoneIcons from '../../../assets/img/icons/phone-icons.svg'
import phoneIconsWhite from '../../../assets/img/icons/phone-icons-white.svg'
import Loading from '../../UI/loading'

type props = {
    image: string
    theme: 'white' | 'dark'
    loading: boolean
    url?: string
}

const MobileViewer = ({image, theme, loading, url} : props ) => {
    const currentTime = new Date()
    const timer = `${currentTime.getHours()}:${currentTime.getMinutes()}`
  return (
    <div className={theme === 'dark' ? `${styles.containerDark}` : `${styles.containerLight}`}>
        <div className={styles.mobileNavbar}>
            {/* <span>{timer}</span> */}
            {/* <div className={`${styles.notch}`}/> */}
            {/* <div className={styles.mobileIcons}>
                <img src={theme==='dark' ? phoneIconsWhite : phoneIcons } alt="mobile view" />
            </div> */}
        </div>
        <a href={url} target='_blank'>
            <div className={styles.body} style={{backgroundImage: `url(${image})`}}>
                { loading && (
                    <Loading />
                )}
            </div>
        </a>
    </div>
  )
}

export default MobileViewer