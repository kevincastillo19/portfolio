// import { Button } from "../Buttons/Button";
import styles from "./_feed.module.scss";
import laptopMockup from "../../assets/img/mockups/laptop-mockup.png";
import phoneMockup from "../../assets/img/mockups/iphone-mockup.png";
import { ImageProject } from "../../utils/ImageProject";
import { Badge } from "../Badge";
type props = {
  title: string;
  caption: string;
  label?: string;
  image:string;  
  technologies:Array<string>
};
export const FeedProject = ({ title, caption, image, technologies}: props) => {

  const renderTechnologies = () => {
    return technologies.map(tech => (
      <Badge key={`tech${tech}`} text={tech}/>
    ))
  }

  return (
    <div className={styles.container}>        
        <div className={styles.data}>
        {/* <span className={styles.titleLabel}>{label}</span> */}
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.caption}>{caption}</p>
        <div className={styles.technologiesContainer}>
          {renderTechnologies()}
        </div>


      </div>
      <div className={styles.containerMockup}>
        {/* <img className={styles.feedPhoto} src={laptopMockup} alt={`Thumbnail from ${title}`}/> */}
        {/* <img className={styles.feedPhotoProject} src={ImageProject(image)} alt={`Thumbnail from ${title}`}/> */}
      </div>
      {/* <img className={styles.feedPhotoPhoneMockup} src={phoneMockup} alt={`Thumbnail from ${title}`}/> */}      
    </div>
  );
};
