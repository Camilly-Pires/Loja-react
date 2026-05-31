import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.loginPage}>
      <Header carrinho={[]} />

      <main className={styles.container}>
        <div className={styles.loginBox}>
          <h2>Faça login ou crie uma conta</h2>
          <form className={styles.form}>
            <label>E-mail ou número de celular</label>
            <input type="text" placeholder="Digite seu e-mail ou celular" />
            <button className={styles.btnLogin}>Continuar</button>
          </form>
          <p className={styles.info}>
            Ao continuar, você concorda com as <a href="#">Condições de Uso</a> e <a href="#">Notificação de Privacidade</a>.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
