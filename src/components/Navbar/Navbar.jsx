import styles from './Navbar.module.css'

import { NavLink, Link } from "react-router-dom"

import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {

    const navbarContent = [
        { link: 'Home', path: '/' },
        { link: 'Projetos', path: '/projects' },
        { link: 'Sobre', path: '/about' },
        { link: 'Contato', path: '/contact' }
    ]

    return (
        <nav className={styles.navbar}>
            <div className={styles.divHeader}>
                <div className={styles.divIanc}>
                    <Link to='/'>
                        IA<span>N</span>C
                    </Link>
                    <p>
                        Artista Visual | Produtora Cultural
                    </p>
                </div>

                <button className={styles.buttonToggle}>
                    <FaBarsStaggered />
                </button>
            </div>

            <ul className={styles.ulNavbar}>
                {
                    navbarContent.map((item) => {
                        const { link, path } = item;

                        return (
                            <li key={path}>
                                <NavLink to={path} className={({ isActive }) => (isActive ? styles.active : '')}>
                                    {link}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navbar