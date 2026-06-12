import { useState } from "react";
import AsideDashboard from "./components/AsideDashboardAdm";
import Modal from "./components/Modal";
import FormList from "./FormList";
import styles from "./DashboardAdm.module.css";

function DashboardAdm() {
  // Estados do Modal
  const [modalAberto, setModalAberto] = useState(false);
  const [modalTitulo, setModalTitulo] = useState("");
  const [tipoForm, setTipoForm] = useState("");

  const [conteudoDireito, setConteudoDireito] = useState("inicio");

  const abrirModalDinamico = (titulo, tipo) => {
    setModalTitulo(titulo);
    setTipoForm(tipo);
    setModalAberto(true);
  };

  const mudarConteudoDireito = (tipoTela) => {
    setConteudoDireito(tipoTela);
  };

  return (
    <div className={styles.pai}>
      <AsideDashboard
        onCliqueBotao={abrirModalDinamico}
        onCliqueValidar={() => mudarConteudoDireito("validar")}
      />
      <main className={styles.conteudoPrincipal}>
        {conteudoDireito === "inicio" && (
          <div className={styles.boasVindas}>
            <h2>Bem-vindo ao Painel Administrativo</h2>
            <p>Selecione uma opção no menu lateral para começar.</p>
          </div>
        )}

        {conteudoDireito === "validar" && <FormList />}
      </main>

      <Modal
        isOpen={modalAberto}
        titulo={modalTitulo}
        onClose={() => setModalAberto(false)}
      >
        {tipoForm === "disciplina" && (
          <>
            {/*Irmao, usa a sintaxe da requisicoes em outros ficheiros. 
            use o valor do usestate no value de cada input */}
            <input type="text" placeholder="Nome da Disciplina" />
            <input type="text" placeholder="Carga Horária" />
            <input type="text" placeholder="Código do Curso" />
            <input type="text" placeholder="Professor Responsável" />
          </>
        )}

        {tipoForm === "turma" && (
          <>
            <input type="text" placeholder="Código da Turma" />
            <input type="text" placeholder="Turno (Ex: Manhã)" />
            <input type="text" placeholder="Trimestre" />
            <input type="text" placeholder="Numero de Alunos" />
          </>
        )}

        {tipoForm === "curso" && (
          <>
            <input type="text" placeholder="Nome do Curso" />
            <input type="text" placeholder="Quantidade de Turmas" />
            <input type="text" placeholder="Código do Departamento" />
            <input type="text" placeholder="Drt. Turma" />
          </>
        )}
      </Modal>
    </div>
  );
}

export default DashboardAdm;
