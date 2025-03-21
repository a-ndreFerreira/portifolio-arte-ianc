import styles from './Contact.module.css'

const Contact = () => {
    return (
        <div className={styles.container}>
            <h3>
                Entre em contato
            </h3>
            <p><i>
                Estamos aqui para transformar suas ideias em realidade. Se você tem um projeto em mente, deseja discutir uma colaboração, ou simplesmente quer saber mais sobre nossos serviços, preencha o formulário abaixo. Ficaremos felizes em ajudar e responderemos o mais rápido possível.</i>
            </p>
            <form className={styles.formContainer}>
                <fieldset>
                    <legend>Nome</legend>
                    <input type='text' />
                </fieldset>
                <fieldset>
                    <legend>E-mail</legend>
                    <input type='text' />
                </fieldset>
                <fieldset>
                    <legend>Assunto</legend>
                    <input type='text' />
                </fieldset>
                <fieldset>
                    <legend>Mensagem</legend>
                    <textarea type='text'></textarea>
                </fieldset>
                <div className={styles.divButton}>
                    <button type='submit' className={styles.button} >
                        Enviar
                    </button>
                </div>
            </form>

        </div>
    )
}

export default Contact