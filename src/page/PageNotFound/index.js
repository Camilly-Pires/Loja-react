import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./PageNotFound.module.css"
import erro404 from "./erro404.png"
function PageNotFound() {
    return (
        <>
            <Header carrinho={[]} />
            <section className={styles.container}>
                <h2>Ops! Página não encontrada!</h2>
                <img src={erro404} alt="Logo da página não encontrada" />
            </section>
            <Footer />
        </>

    );

}
export default PageNotFound;