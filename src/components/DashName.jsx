import styles from "./DashName.module.css";

function DashName(props) {
  return (
    <>
      <h5 className={styles.h5}>{props.dashname}</h5>
    </>
  );
}

DashName.defaultProps = {
  dashname: "carregando...",
};

export default DashName;
