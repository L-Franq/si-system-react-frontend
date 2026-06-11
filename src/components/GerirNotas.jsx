import { useState } from "react";
import styles from "./Falta.module.css";
import table from "../FormList.module.css";

function GerirNotas() {
  const [etapa, setEtapa] = useState("turmas");
  const [turmaSelecionada, setTurmaSelecionada] = useState("");
  const [alunoSelecionado, setAlunoSelecionado] = useState("");

  return (
    <div className={styles.mae}>
      {/* Cabeçalho de Navegação interna */}
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          color: "white",
          padding: "0 20px",
        }}
      >
        <h3>
          Gerir Notas {turmaSelecionada && `> ${turmaSelecionada}`}{" "}
          {alunoSelecionado && `> ${alunoSelecionado}`}
        </h3>
        {etapa !== "turmas" && (
          <button
            onClick={() => {
              if (etapa === "nota") setEtapa("alunos");
              else if (etapa === "alunos") {
                setEtapa("turmas");
                setTurmaSelecionada("");
              }
            }}
            style={{ backgroundColor: "var(--edi)", color: "white" }}
          >
            ← Voltar
          </button>
        )}
      </div>

      {etapa === "turmas" && (
        <div className={table.tableContainer}>
          <table>
            <thead>
              <tr>
                <th>Código da Turma</th>
                <th>Curso / Ano</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>INF-2026</td>
                <td>T. e Linguagens de Programacao</td>
                <td>
                  <button
                    className={table.aprovar}
                    onClick={() => {
                      setTurmaSelecionada("INF-2026");
                      setEtapa("alunos");
                    }}
                  >
                    Ver Alunos
                  </button>
                </td>
              </tr>
              <tr>
                <td>MAT-2026</td>
                <td>Contabilidade Analitica - 2º Ano</td>
                <td>
                  <button
                    className={table.aprovar}
                    onClick={() => {
                      setTurmaSelecionada("MAT-2026");
                      setEtapa("alunos");
                    }}
                  >
                    Ver Alunos
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {etapa === "alunos" && (
        <div className={table.tableContainer}>
          <div className={styles.buscar} style={{ marginBottom: "15px" }}>
            <input type="search" placeholder="Buscar aluno nesta turma..." />
          </div>
          <table>
            <thead>
              <tr>
                <th>Nº Ordem</th>
                <th>Nome do Aluno</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>Abilio Jose</td>
                <td>
                  <button
                    className={table.aprovar}
                    style={{ backgroundColor: "#466985" }}
                    onClick={() => {
                      setAlunoSelecionado("Abilio Jose");
                      setEtapa("nota");
                    }}
                  >
                    Gerir Nota
                  </button>
                </td>
              </tr>
              <tr>
                <td>02</td>
                <td>Adriano da Silva Jr.</td>
                <td>
                  <button
                    className={table.aprovar}
                    style={{ backgroundColor: "#466985" }}
                    onClick={() => {
                      setAlunoSelecionado("Adriano da Silva Jr.");
                      setEtapa("nota");
                    }}
                  >
                    Gerir Nota
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {etapa === "nota" && (
        <div
          style={{
            width: "100%",
            maxWidth: "500px",
            color: "white",
            padding: "20px",
          }}
        >
          <h4 style={{ marginBottom: "20px", textAlign: "center" }}>
            Lançamento de Notas
          </h4>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <div>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Nota da P1:
              </label>
              <input
                type="number"
                max={20}
                min={0}
                placeholder="Ex: 14"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "none",
                }}
              />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Nota da P2:
              </label>
              <input
                type="number"
                max={20}
                min={0}
                placeholder="Ex: 16"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "none",
                }}
              />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Exame:
              </label>
              <input
                type="number"
                max={20}
                min={0}
                placeholder="Ex: 15"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "none",
                }}
              />
            </div>

            <button
              className={table.aprovar}
              style={{ marginTop: "10px", height: "45px", fontSize: "16px" }}
            >
              SALVAR NOTAS
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GerirNotas;
