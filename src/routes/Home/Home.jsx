import styles from './Home.module.css'

import imgBg from '../../assets/double.jpeg'

import imgEye from '../../assets/eyeIanc.png'

const Home = () => {
    return (
        <div className={styles.container}>
            <section>
                <div className={styles.containerSection}>
                    <div className={styles.divImgBg}>
                        <img src={imgBg} alt="RandomBg" />
                    </div>

                    <div className={styles.sleeve}></div>

                    <div className={styles.containerHero}>

                        <div className={styles.hero}>
                            <img src={imgEye} alt="Deus Olho - Arte Ianc - Bianca Santos" />
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

                </div>

            </section>

            <section>
                <div>
                    <h2>
                        Aqui a proxima section
                    </h2>
                </div>
            </section>

        </div>
    )
}

export default Home