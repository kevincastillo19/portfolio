import biowelImage from '../assets/img/projects/biowel.png'
import smarketImage from '../assets/img/projects/smarket.png'
import smarketx2Image from '../assets/img/projects/smarketx2.png'
import vpocketImage from '../assets/img/projects/vpocket.png'
import laguacaImage from '../assets/img/projects/laguaca.png'
import { IMAGES_PROJECTS_DIR } from './constants'

export const ImageProject = (project: string, set?:boolean) => {
    const imagePath = `${IMAGES_PROJECTS_DIR}/${project}`
    switch (project) {
        case 'biowel':
            if (set) return `${biowelImage} 1x, ${biowelImage} 2x, ${biowelImage} 3x`
            return biowelImage
        case 'smarket':
            if (set) return `${smarketImage} 1x, ${smarketx2Image} 2x, ${smarketx2Image} 3x`
            return smarketImage            
        case 'vpocket':
            if (set) return `${vpocketImage} 1x, ${vpocketImage} 2x, ${vpocketImage} 3x`
            return vpocketImage
        case 'laguaca':
            if (set) return `${laguacaImage} 1x, ${laguacaImage} 2x, ${laguacaImage} 3x`
            return laguacaImage        
        default:
            return imagePath
    }
}

export const ImgSet = (project:string) => {

}
