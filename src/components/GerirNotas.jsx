import { useState, useEffect } from "react";
import styles from "./Falta.module.css";
import table from "../FormList.module.css";

function GerirNotas() {
  const [etapa, setEtapa] = useState("turmas");
  const [turmaSelecionada, setTurmaSelecionada] = useState("");
  const [alunoSelecionado, setAlunoSelecionado] = useState("");

  const [codigoTurma, setCodigoTurma] = useState("");
  const [nomeAluno, setNomeAluno] = useState("");
  const [nomeCurso, setNomeCurso] = useState("");
  const [numerOrdem, setNumerOrdem] = useState("");

  useEffect(() => {
    async function dadosTurma() {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const dadosServer = await response.json();

          {
            /* coloque as chaves corretas dos objectos. esses sao meros exemplos */
          }
          setCodigoTurma(dadosServer.cod_turma);
          setNomeCurso(dadosServer.nomeCurso);
        } else {
          setCodigoTurma("None");
          setNomeCurso("undefined");
        }
      } catch (error) {
        console.error("Falha na requisicao ", error);
        setCodigoTurma("Erro");
        setNomeCurso("erro");
      }
    }
    dadosTurma();
  }, []);

  useEffect(() => {
    async function dadosAluno() {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const dadosServer = await response.json();

          {
            /* coloque as chaves corretas dos objectos. esses sao meros exemplos */
          }
          setNumerOrdem(dadosServer.numer_ord);
          setNomeAluno(dadosServer.nome);
        } else {
          setNumerOrdem("None");
          setNomeAluno("undefined");
        }
      } catch (error) {
        console.error("Falha na requisicao ", error);
        setNumerOrdem("Erro");
        setNomeAluno("Erro");
      }
    }
    dadosAluno();
  }, []);

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
                <td>{codigoTurma}</td>
                <td>{nomeCurso}</td>
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
                <td>{codigoTurma}</td>
                <td>{nomeCurso}</td>
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
                <td>{numerOrdem}</td>
                <td>{nomeAluno}</td>
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
                <td>{numerOrdem}</td>
                <td>{nomeAluno}</td>
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
