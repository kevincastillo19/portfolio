import { Navbar } from "../Navbar";
import { navbarOptions } from "../Navbar/navbarActions";
import styles from "./_fullLayout.module.scss"
// import {Footer} from "../Footer"

type props = {
    children: JSX.Element
}

export const FullLayout = ({children}:props) => {  

  return (
    <div className={styles.mainFrame}>       
        {children}      
    </div>
  );
};
