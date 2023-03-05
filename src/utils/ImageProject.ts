import biowelImage from '../assets/img/projects/biowel.png'
import smarketImage from '../assets/img/projects/smarket.png'
import vpocketImage from '../assets/img/projects/vpocket.png'
import laguacaImage from '../assets/img/projects/laguaca.png'

export const ImageProject = (project: string) => {
    switch (project) {
        case 'biowel':
            return biowelImage
        case 'smarket':
            return smarketImage
        case 'vpocket':
            return vpocketImage
        case 'laguaca':
            return laguacaImage
        default:
            return biowelImage
    }
}
