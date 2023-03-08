import { NavbarInterface } from "../../interfaces/Nabvar.d"
import navbarStyles from "./navbar.module.scss"
import {Link} from "react-router-dom"

export const Navbar = ({image, options}:NavbarInterface) => {

  return (
    <nav className={`${navbarStyles.nav} ${image ? '' : navbarStyles.navCentered}`}>
        {image && (
            <div>
                <Link to="/">
                    <img src={image} alt="logo" width={100} className={navbarStyles.logo}/>
                </Link>
            </div>
        )}
        <div className={navbarStyles.menuOptions}>
            {
                options.map(option => (
                    <Link to={option.url}>
                        <span data-content={option.name}>{option.name}</span>
                    </Link>
                ))
            }
        </div>
    </nav>
  )
}