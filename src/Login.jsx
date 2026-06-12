import styles from "./Cadastro.module.css";
import ChangeTitle from "./components/ChangeTitle";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DashboardProf from "./DashboardProf";
import DashboardAdm from "./DashboardAdm";

function Login() {
  let title = "Login";

  async function Entrar(e) {
    e.preventDefaults();
    try {
      const response = await fetch("", {
        method: "POST",
        body: JSON.stringify(email),
      });

      const dadosServer = await response.json();
      localStorage.setItem("token", dadosServer.token);

      alert(dadosServer.mensagem || "Login bem sucedido");

      {
        /* Redirecionamento apos o login, trate de gerir uma logica para reencaminhar entre prof e adm*/
      }
      <Routes>
        <Route path="/dash" element={DashboardProf || DashboardAdm} />
      </Routes>;
    } catch (error) {
      console.error("Falha na requisicao: ", error);
    }
  }

  const [email, setEmail] = useState("");

  return (
    <main className={styles.main}>
      <div className={styles.div}>
        <form className={styles.form} onSubmit={Entrar}>
          <ChangeTitle title={title} />
          <input
            className={styles.input}
            required
            placeholder="exemplo@gmail.com"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles.input}
            required
            placeholder="senha"
            type="password"
          />
          <button className={styles.button} type="submit">
            Logar
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;
