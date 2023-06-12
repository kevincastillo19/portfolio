import { useEffect, useState } from 'react'

export const useImageProject = (project: string) => {
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false)

    // Function to get image from assets folder
    const getImage = async(project:string) => {
        try {
            setLoading(true)
            const response = await import(`../assets/img/projects/${project}.png`)
            setImage(response.default)
            setLoading(false)
        } catch(error){
            // console.error(`Error loading image: ${error}`)
            setImage('')
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getImage(project)
    }, [project])
    
    return { image, loading }
    
}