import styles from "./FormTurmas.module.css"
import ChangeTitle from "./components/ChangeTitle"

function FormTurmas({id, prof, alunos}){

let title = "Cadastrar Turma"

    return(
        <>
        <form className={styles.form}>
            <ChangeTitle title={title} />
        </form>
        </>
    )
}

export default FormTurmas