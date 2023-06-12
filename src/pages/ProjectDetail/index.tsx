import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Project } from '../../interfaces/Project.d'
import projects from '../../shared/projects.json'
import { FeedProject } from '../../components/Feed/feedProject'
import { Navbar } from '../../components/Navbar'
import { navbarOptions } from '../../components/Navbar/navbarActions'
import styles from './_projectDetail.module.scss'
import { Banner } from '../../components/Banner'

export const ProjectDetail = () => {
    const { id } = useParams()
    const [project, setProject] = useState<Project | undefined>({
        id: 0,
        title: '',
        description: '',
        image: '',
        mobile: false,
        technologies: [],
    })

    const homeOptions = [
        {
            name: 'Home',
            url: '/',
            action: () => {},
        },
        {
            name: 'Projects',
            url: '/#projects',
            action: () => {},
        },
        {
            name: 'About',
            url: '/#about',
            action: () => {},
        },
        {
            name: 'Contact',
            url: '/#contact',
            action: () => {},
        },
    ]

    const getProjectDetail = (id: number) => {
        const projectList: Project[] = projects as Array<Project>
        const selectedProject = projectList.find((project) => project.id === id)
        setProject(selectedProject)
    }

    useEffect(() => {
        if(id)
            getProjectDetail(Number(id))
    }, [id])

    return (
        <div className={styles.container}>
            <Navbar image={navbarOptions.image} options={homeOptions} />
            <FeedProject
                title={project?.title ?? ''}
                caption={project?.description ?? ''}
                label={project?.mobile ? 'Web App' : 'Web App & Mobile'}
                image={`${project?.image}x2` || ''}
                technologies={project?.technologies || []}
            />
            <section id="contact" className={styles.contactBanner}>
                <Banner
                    title="Let’s work together on yout next project"
                    caption="Get in touch to start working together and develop this new business idea."
                    buttonText="contact"
                    buttonAction={() => alert('coming soon')}
                />
            </section>
            <div className="bottomGrayRectangle"></div>
        </div>
    )
}
