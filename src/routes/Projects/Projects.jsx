

const projects = {
    projects: [
        {
            _id: 'graffite',
            graffite: [
                { _id: '01', image: 'url' },
                { _id: '02', image: 'url' },
                { _id: '03', image: 'url' }
            ]
        },
        {
            _id: 'producaoCultural',
            producaoCultural: [
                { _id: '01', image: 'url' },
                { _id: '02', image: 'url' },
                { _id: '03', image: 'url' }
            ]
        },
        {
            _id: 'artesDigitais',
            artesDigitais: [
                { _id: '01', image: 'url' },
                { _id: '02', image: 'url' },
                { _id: '03', image: 'url' }
            ]
        },
        {
            _id: 'animacoes',
            animacoes: [
                { _id: '01', image: 'url' },
                { _id: '02', image: 'url' },
                { _id: '03', image: 'url' }
            ]
        },
        {
            _id: 'tradicionais',
            tradicionais: [
                { _id: '01', image: 'url' },
                { _id: '02', image: 'url' },
                { _id: '03', image: 'url' }
            ]
        },
    ]
}
// console.log(projects)

const Projects = () => {
    return (
        <div>
            <h1>
                Projetos
            </h1>
            {
                projects.projects.map(({ _id, graffite, producaoCultural, tradicionais, animacoes, artesDigitais }) => (
                    <div key={_id}>
                        <div>

                            {graffite && (
                                <div>
                                    <h2>
                                        {_id}
                                    </h2>
                                    {
                                        graffite.map(({ _id, image }) => (
                                            <div key={_id}>
                                                <img src={image} alt='image' />
                                            </div>
                                        ))
                                    }
                                </div>
                            )}
                        </div>
                        <div>
                            {producaoCultural && (
                                <div>
                                    <h2>
                                        {_id}
                                    </h2>
                                    {
                                        producaoCultural.map(({ _id, image }) => (
                                            <div key={_id}>
                                                <img src={image} alt='image' />
                                            </div>
                                        ))
                                    }
                                </div>
                            )}
                        </div>
                        <div>
                            {tradicionais && (
                                <div>
                                    <h2>
                                        {_id}
                                    </h2>
                                    {
                                        tradicionais.map(({ _id, image }) => (
                                            <div key={_id}>
                                                <img src={image} alt='image' />
                                            </div>
                                        ))
                                    }
                                </div>
                            )}
                        </div>
                        <div>
                            {artesDigitais && (
                                <div>
                                    <h2>
                                        {_id}
                                    </h2>
                                    {
                                        artesDigitais.map(({ _id, image }) => (
                                            <div key={_id}>
                                                <img src={image} alt='image' />
                                            </div>
                                        ))
                                    }
                                </div>
                            )}
                        </div>
                        <div>
                            {animacoes && (
                                <div>
                                    <h2>
                                        {_id}
                                    </h2>
                                    {
                                        animacoes.map(({ _id, image }) => (
                                            <div key={_id}>
                                                <img src={image} alt='image' />
                                            </div>
                                        ))
                                    }
                                </div>
                            )}
                        </div>
                    </div>
                )
                )
            }
        </div>
    )
}

export default Projects