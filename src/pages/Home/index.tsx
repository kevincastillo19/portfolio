import {Feed} from "../../components/Feed"
export const Home = () => {  

  const CAPTION_TEXT = "I'm a System engineer with more than three years of experience in Software development, currently I'm working as a Fullstack developer. In addition to this, I have experience in the graphic design area, such as Design UX/UI and others."

  return (
    <>
      <Feed
        label="Hello I'm Kevin Castillo"
        title="Software Developer"
        caption={CAPTION_TEXT}
      />
    </>
  )
}
