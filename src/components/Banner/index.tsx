import styles from './_banner.module.scss'

type props = {
    title: string
    caption: string
    buttonText: string
    buttonAction: () => void
}

export const Banner = ({ title, caption, buttonText, buttonAction }: props) => (
    <div className={styles.bannerContainer}>
        <div className={styles.textCol}>
            <h2 className={'title'}>{title}</h2>
            <p className={'caption'}>{caption}</p>
        </div>
        {buttonText && (
            <div className={styles.buttonCol}>
                <button className="button-primary" onClick={buttonAction}>
                    {buttonText}
                </button>
            </div>
        )}
    </div>
)
