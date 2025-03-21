import styles from './About.module.css'
import aboutHero from '../../assets/aboutHero.jpg'

const About = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.container}>
                <div className={styles.wrapperImageDescription}>
                    <div>
                        <img className={styles.image} src={aboutHero} alt="Foto Artista Bianca Santos" />
                    </div>
                    <div className={styles.descriptionContent}>
                        <p>
                            Nascida e criada em Ribeirão Preto, iniciou seus estudos em artes após conquistar uma bolsa integral no curso de Computação Gráfica do Senac, concluído em 2019. Desde então, aprimorou suas habilidades em desenho digital e técnicas tradicionais, como nanquim e aquarela, por meio de diversos cursos e oficinas de arte e desenho. Seu trabalho explora temas históricos, sociais, geográficos e ambientais, unindo pesquisa e expressão artística.
                        </p>
                        <p>
                            Atualmente, cursa Produção Cultural no Centro Universitário Belas Artes de São Paulo, com o objetivo de tirar do papel projetos autorais que conectam arte e cultura. Entre seus projetos recentes, destaca-se a criação de um mural sobre a fauna marinha no LAPOM da UFSC, em Florianópolis. Além disso, desenvolveu um projeto voluntário de pintura e customização de lixeiras na Lagoa do Saibro, promovendo a conscientização ambiental por meio da arte.
                            Está em busca de novas oportunidades em projetos culturais e de produção artística.
                        </p>
                    </div>
                </div>
                <div className={styles.tools}>
                    <h3>
                        Ferramentas
                    </h3>
                    <p>
                        Ilustrator, Substance Designer, Photoshop, After Effects
                    </p>
                </div>
                <div className={styles.skills}>
                    <h3>
                        Habilidades
                    </h3>
                    <p>
                        3D Modeling / Texturing / Shading /  3D & 2D Animation / traditional drawing
                    </p>
                </div>
            </div>

        </section>
    )
}

export default About