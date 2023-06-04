import styles from './_badge.module.scss'

type props = {
    text:string
}

export const Badge = ({text}:props) => {
  return (
    <>
        <div className={styles.badgeRed}>
            <span>{text}</span>
        </div>
    </>
  )
}
