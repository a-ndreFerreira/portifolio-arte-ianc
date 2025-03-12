import styles from './RootLayout.module.css'

import { Outlet } from "react-router-dom"

import Navbar from "../../components/Navbar/Navbar"

import Footer from "../../components/Footer/Footer"

const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <main className={styles.mainOutlet}>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout