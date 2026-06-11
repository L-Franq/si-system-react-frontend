import { useState } from "react";
import ChangeTitle from "./components/ChangeTitle";
import styles from "./Cadastro.module.css";
import Cadastrar from "./components/GoLogin";

function Cadastro() {
  async function CadastarUser(e) {
    e.preventDefault();
    const dados = [nome, tel, email, senha];

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(dados),
      });

      const dadosServer = await response.json();

      if (response.ok) {
        alert(dadosServer.mensagem || "Cadastrado com sucesso!");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const [nome, setNome] = useState("Undefined");
  const [tel, setTel] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  let title = "Cadastro";

  return (
    <main className={styles.main}>
      <div className={styles.div}>
        <form className={styles.form} onSubmit={CadastarUser}>
          <ChangeTitle title={title} />
          <input
            className={styles.input}
            required
            placeholder="nome completo"
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            className={styles.input}
            required
            placeholder="999 999 999"
            type="tel"
            id="telefone"
            name="tel"
            onChange={(e) => setTel(e.target.value)}
          />
          <input
            className={styles.input}
            required
            placeholder="exemplo@gmail.com"
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles.input}
            required
            placeholder="senha"
            type="password"
            id="password"
            name="senha"
            onChange={(e) => setSenha(e.target.value)}
          />
          <input
            className={styles.input}
            required
            placeholder="confirme a senha"
            type="password"
            id="confirmPass"
            name="confirmSenha"
          />
          <Cadastrar />
        </form>
      </div>
    </main>
  );
}

export default Cadastro;
