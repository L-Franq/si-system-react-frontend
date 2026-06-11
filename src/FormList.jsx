import styles from "./FormList.module.css";

function FormList() {
  async function DadosProfessor() {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let dados = await response.json();
    } catch (error) {
      console.error("Falha na requisicao: ", error);
    }
  }

  return (
    <>
      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Identificador</th>
              <th>Professor</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PF0001</td>
              <td>Adriano da Silva</td>
              <td>
                <button>Aprovar</button>
                <button>Recusar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormList;
