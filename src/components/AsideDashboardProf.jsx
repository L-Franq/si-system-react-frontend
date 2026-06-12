import styles from "./AsideDashboard.module.css";
import ChangeTitle from "./ChangeTitle";
import DashName from "./DashName";
import Logout from "./LogouButton";
import { useState, useEffect } from "react";

function AsideDashboardProf({ onMudarTela }) {

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
  
          setNome("Professor: ", dadosServer.nome);
        }
        else{
          setNome("Professor: ", "Desconhecido");
        }
      } catch (error) {
        console.error("Falha na requisicao ", error);
        setNome("Professor: ", "Erro ao Carregar");
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