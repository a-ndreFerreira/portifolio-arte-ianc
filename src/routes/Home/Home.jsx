import styles from './Home.module.css'

const Home = () => {
    return (
        <section>
            <div>
                background here
            </div>
            <div>
                sleeve here
            </div>
            <div className={styles.container}>

                <div className={styles.hero}>
                    <img src="" alt="Deus Olho - Arte Ianc - Bianca Santos" />
                </div>

                <div className={styles.containerContent}>
                    <div className={styles.arteContent}>
                        Arte
                    </div>

                    <div className={styles.iancContent}>
                        IA<span>N</span>C
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Home