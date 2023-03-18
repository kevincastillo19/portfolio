import { useRef, MutableRefObject, RefObject } from 'react'
import { Feed } from '../../components/Feed'
import { Card } from '../../components/Card'
import { CardSquare } from '../../components/CardSquare'
import { Badge } from '../../components/Badge'
import styles from './_home.module.scss'
import laptopIcon from '../../assets/img/icons/laptop-icon.svg'
import tabletIcon from '../../assets/img/icons/tablet-icon.svg'
import ruleIcon from '../../assets/img/icons/rule-icon.svg'
import { Slide } from '../../components/Slide/index'
import { ImageProject } from '../../utils/ImageProject'
import { Banner } from '../../components/Banner'
import { Navbar } from '../../components/Navbar/';
import { navbarOptions } from "../../components/Navbar/navbarActions";

// hooks 🦉}
import useScroll from '../../hooks/useScroll'

export const Home = () => {
    const CAPTION_TEXT =
        "I'm a System engineer with more than three years of experience in Software development, currently I'm working as a Fullstack developer. In addition to this, I have experience in the graphic design area, such as Design UX/UI and others."

    const { scrollTo } = useScroll()
    const scrollRef = {        
        homeRef: useRef<HTMLHeadingElement>(null),
        aboutRef: useRef<HTMLHeadingElement>(null),
        projectsRef: useRef<HTMLHeadingElement>(null),
        contactRef: useRef<HTMLHeadingElement>(null),
    }

    const homeOptions = [
        {
            name: 'Home',
            url: '/',
            action: ()=>scrollTo(scrollRef.homeRef),
        },
        {
            name: 'Projects',
            url: '/#projects',
            action: ()=>scrollTo(scrollRef.projectsRef),
        },
        {
            name: 'About',
            url: '/#about',
            action: ()=>scrollTo(scrollRef.aboutRef),
        },
        {
            name: 'Contact',
            url: '/#contact',
            action: ()=>scrollTo(scrollRef.contactRef),
        },
    ]


    return (
        <>
            <Navbar
                image={navbarOptions.image}
                options={homeOptions}
            />
            <section id="home" ref={scrollRef.homeRef}>
                <Feed
                    label="Hello I'm Kevin Castillo"
                    title="Software Developer"
                    caption={CAPTION_TEXT}
                    buttonAction={() => scrollTo(scrollRef.aboutRef)}
                />
            </section>
            <section id="about" className={styles.container}>
                <div className={styles.graySquare} />
                <div className={styles.blackSquare} />
                <article ref={scrollRef.aboutRef} className={styles.cardsFrame}>
                    <Card
                        icon={laptopIcon}
                        color="gray"
                        title="FullStack developer"
                        caption="I’m System Engineer and work as a fullStack developer. "
                        buttonText="Know more"
                        buttonAction={() => console.log('know more fullstack')}
                    />
                    <Card
                        icon={tabletIcon}
                        color="primary"
                        title="UX/UI Design"
                        caption="I have experience with UX/UI Design, Let’s start to make a new unicorn."
                        buttonText="Know more"
                        buttonAction={() => console.log('know more design')}
                    />
                    <Card
                        icon={ruleIcon}
                        color="gray"
                        title="Branding"
                        caption="I have experience with UX/UI Design, Let’s start to make a new unicorn."
                        buttonText="Know more"
                        buttonAction={() => console.log('know more branding')}
                    />
                </article>
                <article className={styles.badgesFrame}>
                    <CardSquare bigText={'3+'} label={'Years Experience'} />
                    <div className={styles.badgeRectangle}>
                        <div className={styles.badgeRow}>
                            <Badge bigText={'6'} label={'Clients'} />
                            <Badge bigText={'10+'} label={'Technologies'} />
                        </div>
                        <div className={styles.badgeRow}>
                            <Badge
                                bigText={'12+'}
                                label={'Completed projects'}
                            />
                            <Badge bigText={'16+'} label={'Achievements'} />
                        </div>
                    </div>
                </article>
            </section>
            <section
                ref={scrollRef.projectsRef}
                id="featuredProjects"
                className={styles.featuredProjects}
            >
                <div className={styles.featuredTitle}>
                    <h2 className={'subtitleWhite'}>FEATURED PROJECTS</h2>
                    <button className={'button-primary'}>view all</button>
                </div>
                <article id="projects" className={styles.projects}>
                    <Slide
                        image={ImageProject('biowel')}
                        title="Biowel ERP"
                        buttonText="KNOW MORE"
                        buttonAction={() => console.log('biowel')}
                    />
                    <Slide
                        image={ImageProject('smarket')}
                        title="Smarket"
                        buttonText="KNOW MORE"
                        buttonAction={() => console.log('smarket')}
                    />
                    <Slide
                        image={ImageProject('laguaca')}
                        title="La Guaca"
                        buttonText="KNOW MORE"
                        buttonAction={() => console.log('guaca')}
                    />
                    <Slide
                        image={ImageProject('vpocket')}
                        title="VPOCKET"
                        buttonText="KNOW MORE"
                        buttonAction={() => console.log('vpocket')}
                    />
                </article>
            </section>
            <div className={styles.grayRectangle}></div>
            <section ref={scrollRef.contactRef} id="contact" className={styles.contactBanner}>
                <Banner
                    title="Let’s work together on yout next project"
                    caption="Get in touch to start working together and develop this new business idea."
                    buttonText="contact"
                    buttonAction={() => console.log('contact')}
                />
            </section>
        </>
    )
}
