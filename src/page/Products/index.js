import Header from "../../components/Header";
import Footer from "../../components/Footer";
import products from "../../json/productsData.json";
import styles from "./Products.module.css";

function Products({ adicionarAoCarrinho, carrinho, toggleCarrinho }) {
  const categorias = products.reduce((acc, produto) => {
    if (!acc[produto.categoria]) {
      acc[produto.categoria] = [];
    }
    acc[produto.categoria].push(produto);
    return acc;
  }, {});

  return (
    <div className={styles.pageContainer}>
      <Header carrinho={carrinho} toggleCarrinho={toggleCarrinho} />

      <div className={styles.mainContent}>
        <div className={styles.produtosWrapper}>
          {Object.keys(categorias).map((categoria) => (
            <section key={categoria} className={styles.categoriaSection}>
              <h2 className={styles.categoriaTitulo}>{categoria}</h2>

              <div className={styles.produtosContainer}>
                {categorias[categoria].map((produto) => (
                  <div key={produto.id} className={styles.card}>
                    <img
                      src={produto.imagem}
                      alt={produto.nome}
                      className={styles.imagemProduto}
                    />
                    <h3 className={styles.nome}>{produto.nome}</h3>
                    <p className={styles.descricao}>{produto.descricao}</p>
                    <span className={styles.preco}>
                      R$ {produto.preco.toFixed(2)}
                    </span>
                    <button
                      onClick={() => adicionarAoCarrinho(produto)}
                      className={styles.botao}
                    >
                      Adicionar ao carrinho
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Products;
