import styles from "./AsideDashboard.module.css";
import ChangeTitle from "./ChangeTitle";
import DashName from "./DashName";
import Logout from "./LogouButton";
import { useState, useEffect } from "react";

function AsideDashboard({ onCliqueBotao, onCliqueValidar }) {

  const [nome, setNome] = useState("");
  let title = "Dashboard";

useEffect(()=>{
  async function buscarDados(){
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      if(response.ok){
        const dadosServer = await response.json();

        setNome("Admin.: ", dadosServer.nome);
      }
      else{
        setNome("Admin.: ", "Desconhecido");
      }
    } catch (error) {
      console.error("Falha na requisicao ", error);
      setNome("Admin.: ", "Erro ao Carregar");
    }
  }
  buscarDados();
}, []);

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
