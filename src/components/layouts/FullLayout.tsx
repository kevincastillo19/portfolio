import { Navbar } from "../Navbar";
import { navbarOptions } from "../Navbar/navbarActions";
import {Footer} from "../Footer"
import styles from "./fullLayout.module.scss"
type props = {
    children: JSX.Element
}

export const FullLayout = ({children}:props) => {
  return (
    <div className={styles.mainFrame}>
      <Navbar image={navbarOptions.image} options={navbarOptions.options} />
      {children}
      <Footer/>
    </div>
  );
};
