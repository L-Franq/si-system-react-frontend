import { useState } from "react";
import styles from "./AsideDashboard.module.css";
import ChangeTitle from "./ChangeTitle";
import DashName from "./DashName";
import Logout from "./LogouButton";

function AsideDashboard() {
  let userName = "";
  async function Dados() {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const dadosServer = await response.json();
      userName = dadosServer.nome;
    } catch (error) {
      console.error(error);
    }
  }

  let [nome, setNome] = useState(userName);
  
  let title = "Dashboard";
  return (
    <>
      <aside className={styles.aside}>
        <ChangeTitle title={title} />
        <div className={styles.top}>
          <DashName dashname={setNome} />
        </div>

        <div className={styles.menu}>
          <button className={styles.button}>perfil</button>
          <button className={styles.button}>Validar Professores</button>
          <button className={styles.button}>Adicionar Disciplinas</button>
          <button className={styles.button}>Adicionar turmas</button>
          <button className={styles.button}>Adicionar cursos</button>
        </div>
        <Logout />
      </aside>
    </>
  );
}

export default AsideDashboard;
