import { useState } from "react";
import styles from "./Falta.module.css";
import table from "../FormList.module.css";

function Falta() {
  const [etapa, setEtapa] = useState("turmas");
  const [turmaSelecionada, setTurmaSelecionada] = useState("");

  const [faltaTempo1, setFaltaTempo1] = useState(false);
  const [faltaTempo2, setFaltaTempo2] = useState(false);

  return (
    <div className={styles.mae}>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          color: "white",
          padding: "0 20px",
          alignItems: "center",
        }}
      >
        <h3>Marcar Faltas {turmaSelecionada && `> ${turmaSelecionada}`}</h3>
        {etapa !== "turmas" && (
          <button
            onClick={() => {
              setEtapa("turmas");
              setTurmaSelecionada("");
            }}
            style={{ backgroundColor: "var(--edi)", color: "white" }}
          >
            ← Voltar para Turmas
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
                <td>T. e Linguagens de Programcao - 1º Ano</td>
                <td>
                  <button
                    className={table.aprovar}
                    onClick={() => {
                      setTurmaSelecionada("INF-2026");
                      setEtapa("chamada");
                    }}
                  >
                    Fazer Chamada
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
                      setEtapa("chamada");
                    }}
                  >
                    Fazer Chamada
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {etapa === "chamada" && (
        <div className={table.tableContainer}>
          <div className={styles.buscar} style={{ marginBottom: "15px" }}>
            <input type="search" placeholder="Buscar aluno para chamada..." />
          </div>

          <table>
            <thead>
              <tr>
                <th>Nº de Ordem</th>
                <th>Nome Completo</th>
                <th style={{ textAlign: "center" }}>1º Tempo</th>
                <th style={{ textAlign: "center" }}>2º Tempo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>Abilio Jose</td>
                <td style={{ textAlign: "center" }}>
                  <button
                    onClick={() => setFaltaTempo1(!faltaTempo1)}
                    style={{
                      backgroundColor: faltaTempo1
                        ? "var(--del)"
                        : "var(--sav)",
                      color: "white",
                      width: "90px",
                    }}
                  >
                    {faltaTempo1 ? "FALTA" : "PRESENTE"}
                  </button>
                </td>
                <td style={{ textAlign: "center" }}>
                  <button
                    onClick={() => setFaltaTempo2(!faltaTempo2)}
                    style={{
                      backgroundColor: faltaTempo2
                        ? "var(--del)"
                        : "var(--sav)",
                      color: "white",
                      width: "90px",
                    }}
                  >
                    {faltaTempo2 ? "FALTA" : "PRESENTE"}
                  </button>
                </td>
              </tr>

              <tr>
                <td>02</td>
                <td>Adriano da Silva Jr.</td>
                <td style={{ textAlign: "center" }}>
                  <button
                    style={{
                      backgroundColor: "var(--sav)",
                      color: "white",
                      width: "90px",
                    }}
                  >
                    PRESENTE
                  </button>
                </td>
                <td style={{ textAlign: "center" }}>
                  <button
                    style={{
                      backgroundColor: "var(--del)",
                      color: "white",
                      width: "90px",
                    }}
                  >
                    FALTA
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <button
              className={table.aprovar}
              style={{ height: "40px", padding: "0 30px" }}
              onClick={() => {
                alert("Chamada guardada com sucesso!");
                setEtapa("turmas");
                setTurmaSelecionada("");
              }}
            >
              GUARDAR DIÁRIO
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Falta;
