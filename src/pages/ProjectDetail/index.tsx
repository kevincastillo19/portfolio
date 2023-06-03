import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Project } from '../../interfaces/Project.d'
import projects from "../../shared/projects.json"
export const ProjectDetail = () => {

    const { id } = useParams()
    const [project, setProject] = useState<Project>()

    const getProjectDetail = (id:number) => {
        const projectList:Project[] = projects as Array<Project>
        const selectedProject = projectList.find(project => project.id === id)
        setProject(selectedProject)
        console.log(selectedProject, 'selectedProject')
    }

    useEffect(()=>{
        getProjectDetail(Number(id))
    },[id])

    return (
        <>
            <h1>Project Detail {id}</h1>
        </>
    )
}