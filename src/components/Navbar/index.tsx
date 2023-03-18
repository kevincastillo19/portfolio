import { NavbarInterface } from '../../interfaces/Nabvar.d'
import styles from './_navbar.module.scss'
import { Link } from 'react-router-dom'

export const Navbar = ({ image, options }: NavbarInterface) => {
    return (
        <nav className={`${styles.nav} ${image ? '' : styles.navCentered}`}>
            {image && (
                <div>
                    <Link to="/">
                        <img
                            src={image}
                            alt="logo"
                            width={100}
                            className={styles.logo}
                        />
                    </Link>
                </div>
            )}
            <div className={styles.menuOptions}>
                {options.map((option) => (
                    <Link to={option.url} key={option.url}>
                        <span data-content={option.name}>{option.name}</span>
                    </Link>
                ))}
            </div>
        </nav>
    )
}
