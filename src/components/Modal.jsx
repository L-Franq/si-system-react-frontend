import styles from "./Modal.module.css";
import ChangeTitle from "./ChangeTitle";

function Modal({ isOpen, titulo, children, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.mae}>
        <div className={styles.header}>
          <ChangeTitle title={titulo} />
          <button onClick={onClose} className={styles.fechar}>
            X
          </button>
        </div>

        <div className={styles.buscar}>
          <input
            maxLength={50}
            type="search"
            name=""
            id="busca"
            placeholder="Buscar..."
          />
        </div>

        <div className={styles.campos}>{children}</div>

        <div className={styles.controles}>
          <button className={styles.editar}>EDITAR</button>
          <button className={styles.salvar}>SALVAR</button>
          <button className={styles.deletar}>DELETAR</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
