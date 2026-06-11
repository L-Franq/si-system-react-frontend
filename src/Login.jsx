import styles from './Cadastro.module.css'
import ChangeTitle from './components/ChangeTitle';

function Login(){
    let title = "Login";

    function dashboard(e){
      e.preventDefault();
      window.location.href = "/DashboardAdm";
    }

    return(
        <main className={styles.main}>
      <div className={styles.div}>
        <form className={styles.form} action="">
          <ChangeTitle title={title} />
          <input
            className={styles.input}
            required
            placeholder="exemplo@gmail.com"
            type="email"
          />
          <input
            className={styles.input}
            required
            placeholder="senha"
            type="password"
          />
          <button onClick={dashboard} className={styles.button} type="submit">
            Logar
          </button>
        </form>
      </div>
    </main>
    )
}

export default Login;