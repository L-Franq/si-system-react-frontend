import styles from "./AsideDashboard.module.css";
import ChangeTitle from "./ChangeTitle";
import DashName from "./DashName";
import Logout from "./LogouButton";

function AsideDashboardProf({ onMudarTela }) {
  let title = "Dashboard";
  let nome = "professor: " + " Adriano da Silva";
  
  return (
    <>
      <aside className={styles.aside}>
        <ChangeTitle title={title} />
        <div className={styles.top}>
          <DashName dashname={nome} />
        </div>

        <div className={styles.menu}>
          <button className={styles.button} onClick={() => onMudarTela("notas")}>
            Gerir Notas
          </button>
          
          <button className={styles.button} onClick={() => onMudarTela("faltas")}>
            Marcar Faltas
          </button>
          
          <button className={styles.button} onClick={() => onMudarTela("horarios")}>
            Ver Horarios
          </button>
        </div>
        <Logout />
      </aside>
    </>
  );
}

export default AsideDashboardProf;