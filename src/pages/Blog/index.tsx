import React from 'react'
import projects from "../../shared/projects.json"
import { Project } from '../../interfaces/Project.d'
import { useImageProject } from '../../hooks/useImageProject'
import { Slide } from '../../components/Slide'
import { useNavigate } from 'react-router-dom'
import { Feed } from '../../components/Feed'
export default function Blog() {
    // navigate for redirect any page
    const navigate = useNavigate()

    const renderPosts = () => {
        const postsList:Project[] = projects as Array<Project>
        return postsList.map(post => {
            const { image } = useImageProject(post.image)
            return (
                <Slide
                    key={post.id}
                    image={image}
                    title={post.title}
                    buttonText="KNOW MORE"
                    buttonAction={() => navigate(`/blog/post/${post.id}`)}
                />
            )
        })
    }
    return (
        <>
            <section id="home">
                <Feed
                    label="Hello I'm Kevin Castillo"
                    title="Software Engineer"
                    caption={'CAPTION_TEXT'}
                    buttonAction={() => console.log('working...')}
                />
            </section>
            <section
                id="featuredProjects"
                // className={styles.featuredProjects}
            >
                <div 
                    // className={styles.featuredTitle}
                >
                    <h2 className={'subtitleWhite'}>FEATURED PROJECTS</h2>
                    <button className={'button-primary'}>view all</button>
                </div>
                <article id="projects"
                    // className={styles.projects}
                >
                    {/* Render projects mapping */}
                    {renderPosts()}
                </article>
            </section>
        </>
    )
}
