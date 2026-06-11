import styles from "./FormList.module.css";

function FormList() {

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
                <button className={styles.aprovar}>Aprovar</button>
                <button className={styles.recusar}>Recusar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormList;
