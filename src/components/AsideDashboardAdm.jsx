import styles from "./AsideDashboard.module.css";
import ChangeTitle from "./ChangeTitle";
import DashName from "./DashName";
import Logout from "./LogouButton";

function AsideDashboard({ onCliqueBotao, onCliqueValidar }) {
  let nome = "Admin.: " + " Eliseu";
  let title = "Dashboard";

  return (
    <>
      <aside className={styles.aside}>
        <ChangeTitle title={title} />
        <div className={styles.top}>
          <DashName dashname={nome} />
        </div>

        <div className={styles.menu}>
          <button className={styles.button} onClick={onCliqueValidar}>
            Validar Professores
          </button>

          <button
            className={styles.button}
            onClick={() => onCliqueBotao("Adicionar Disciplinas", "disciplina")}
          >
            Adicionar Disciplinas
          </button>

          <button
            className={styles.button}
            onClick={() => onCliqueBotao("Adicionar Turmas", "turma")}
          >
            Adicionar turmas
          </button>

          <button
            className={styles.button}
            onClick={() => onCliqueBotao("Adicionar Cursos", "curso")}
          >
            Adicionar cursos
          </button>
        </div>
        <Logout />
      </aside>
    </>
  );
}

export default AsideDashboard;
