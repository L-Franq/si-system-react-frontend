import { useState } from "react";
import AsideDashboardProf from "./components/AsideDashboardProf";
import Falta from "./components/Falta";
import GerirNotas from "./components/GerirNotas";
import styles from "./DashboardAdm.module.css";

function DashboardProf() {
  const [telaAtiva, setTelaAtiva] = useState("inicio");

  return (
    <div className={styles.pai}>
      <AsideDashboardProf onMudarTela={(tela) => setTelaAtiva(tela)} />

      <main className={styles.conteudoPrincipal}>
        {telaAtiva === "inicio" && (
          <div className={styles.boasVindas}>
            <h2>Olá, Professor Adriano!</h2>
            <p>Escolha uma das opções ao lado para gerenciar sua pauta.</p>
          </div>
        )}

        {telaAtiva === "faltas" && <Falta />}

        {telaAtiva === "notas" && <GerirNotas />}

        {telaAtiva === "horarios" && (
          <div className={styles.boasVindas}>
            <h2>Seus Horários</h2>
            <p>Componente de horários em desenvolvimento...</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default DashboardProf;
