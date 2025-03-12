import styles from './Navbar.module.css'

import { NavLink, Link } from "react-router-dom"

import { FaBarsStaggered } from "react-icons/fa6";

import { FaBehance } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {

    const navbarContent = [
        { link: 'Home', path: '/' },
        { link: 'Projetos', path: '/projects' },
        { link: 'Sobre', path: '/about' },
        { link: 'Contato', path: '/contact' }
    ]

    const socialMedia = [
        { link: <FaBehance />, to: 'http://behance.com' },
        { link: <FaInstagram />, to: 'http://instagram.com' },
        { link: <FaLinkedinIn />, to: 'http://linkedin.com' }
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

            <div className={styles.divListsNavbar}>
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

                <ul className={styles.ulSocialMedia}>
                    {
                        socialMedia.map((item) => {
                            const { link, to } = item;

                            return (
                                <li key={to}>
                                    <Link to={to} target='_blank'>
                                        {link}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </nav>
    )
}

export default Navbar