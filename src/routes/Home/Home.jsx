import styles from './Home.module.css'

import imgBg from '../../assets/double.jpeg'

import imgEye from '../../assets/eyeIanc.png'

import imgDig from '../../assets/potyra.jpeg'

import imgHeart from '../../assets/heart.jpeg'

import imgClock from '../../assets/clockFace.jpeg'

const Home = () => {

    const arrayDb = [
        {
            id: "01",
            image: imgBg,
            title: 'A vida das Gêmeas',
            description: 'Arte criada para expressar sentimentos de uma relação entre irmãs.'
        },
        {
            id: "02",
            image: imgEye,
            title: 'Deus Olho',
            description: 'Arte criada em 2020, ilustrando o Deus Olho.'
        },
        {
            id: "03",
            image: imgDig,
            title: 'Potyra',
            description: 'Potyra, a indigena e seu companheiro Maritoco.'
        },
        {
            id: "04",
            image: imgHeart,
            title: 'Pensamento',
            description: 'Arte expressa a mente de uma mulher.'
        },
        {
            id: "05",
            image: imgClock,
            title: 'Deus Olho',
            description: 'Arte criada em 2020, ilustrando o Deus Olho.'
        }
    ]

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

            <section className={styles.sectionWrapper}>
                <div className={styles.sectionCards}>
                    <div className={styles.card}>
                        <h3>
                            Grafitte
                        </h3>
                        <img src={imgEye} width='100rem' />
                        <p>
                            Trabalhos a céu aberto.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3>
                            Produção Cultural
                        </h3>
                        <img src={imgBg} width='100rem' />
                        <p>
                            Cultura é sinônimo de poder.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3>
                            Tradicionais
                        </h3>
                        <img src={imgHeart} width='100rem' />
                        <p>
                            Arte tradicional com pincéis.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3>
                            Artes Digitais
                        </h3>
                        <img src={imgDig} width='100rem' />
                        <p>
                            Desenhos digitais.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3>
                            Animações
                        </h3>
                        <img src={imgClock} width='100rem' />
                        <p>
                            Animações digitais.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3>
                            Lojinha
                        </h3>
                        <img src={imgClock} width='100rem' />
                        <p>
                            Ajude o artista independente, que tal me pagar um café.
                        </p>
                    </div>

                </div>

            </section>

        </div>
    )
}

export default Home