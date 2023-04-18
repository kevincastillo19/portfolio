import styles from './_banner.module.scss'

type props = {
    title: string
    caption: string
    buttonText: string
    buttonAction: () => void
    contact?: boolean
}

export const Banner = ({
    title,
    caption,
    buttonText,
    buttonAction,
    contact,
}: props) => (
    <div className={styles.bannerContainer}>
        <div className={styles.textColumn}>
            <h2 className={'title'}>{title}</h2>
            <p className={'caption'}>{caption}</p>
            <form action="" className={styles.contactForm}>
                <div className={styles.box}>
                    <div className={styles.formInput}>
                        <label htmlFor="name" className={styles.formLabel}>
                            Your name
                        </label>
                        <input type="text" name="name" placeholder="Jhon Doe" />
                    </div>

                    <div className={styles.formInput}>
                        <label htmlFor="email" className={styles.formLabel}>
                            Your email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="jhon@mail.com"
                        />
                    </div>
                </div>

                <label htmlFor="message" className={styles.formLabel}>
                    Message
                </label>
                <textarea
                    name="message"
                    cols={30}
                    rows={10}
                    placeholder="Enter your text here"
                ></textarea>
            </form>
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
