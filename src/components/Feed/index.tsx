import { Button } from "../Buttons/Button";
import styles from "./_feed.module.scss";
import feedPhoto from "../../assets/img/feed-photo.png";
type props = {
  title: string;
  caption: string;
  label?: string;
  photo?: string; 
  buttonAction: () => void;
};
export const Feed = ({ title, caption, label, buttonAction, photo}: props) => {
  return (
    <div className={styles.container}>
      <img className={styles.feedPhoto} src={photo ?? feedPhoto} alt="profile-photo"/>
      <div className={styles.data}>
        <span className={styles.titleLabel}>{label}</span>
        <div className={styles.containerTitle}>
          <h1 className={styles.title}>{title}</h1>
        </div>
        <p className={styles.caption}>{caption}</p>
        <Button text="About me" type="primary" action={buttonAction} />
      </div>
    </div>
  );
};
