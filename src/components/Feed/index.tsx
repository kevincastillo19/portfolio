import { Button } from "../Buttons/Button";
import styles from "./feedStyles.module.scss";
type props = {
  title: string;
  caption: string;
  label?: string;
};
export const Feed = ({ title, caption, label }: props) => {
  return (
    <div className={styles.container}>
      <div className={styles.data}>
        <span className={styles.titleLabel}>{label}</span>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.caption}>{caption}</p>
        <Button text="About me" type="primary" action={()=>{console.log("abbout me")}} />
      </div>
    </div>
  );
};
