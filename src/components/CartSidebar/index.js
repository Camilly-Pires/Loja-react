import styles from "./CartSidebar.module.css";

function CartSidebar({
  aberto,
  carrinho,
  adicionarAoCarrinho,
  removerDoCarrinho,
  removerTodosDoProduto,
  toggleCarrinho,
}) {
  const agrupado = carrinho.reduce((acc, produto) => {
    const existente = acc.find((p) => p.id === produto.id);
    if (existente) {
      existente.quantidade += 1;
    } else {
      acc.push({ ...produto, quantidade: 1 });
    }
    return acc;
  }, []);

  const total = agrupado.reduce(
    (acc, produto) => acc + produto.preco * produto.quantidade,
    0
  );

  return (
    <div className={`${styles.carrinho} ${aberto ? styles.aberto : ""}`}>
      <div className={styles.header}>
        <h2>Carrinho</h2>
        <button onClick={toggleCarrinho} className={styles.fechar}>
          X
        </button>
      </div>

      <div className={styles.itens}>
        {agrupado.length === 0 ? (
          <p className={styles.vazio}>Seu carrinho está vazio.</p>
        ) : (
          agrupado.map((produto) => (
            <div key={produto.id} className={styles.item}>
              <img src={produto.imagem} alt={produto.nome} className={styles.img} />

              <div className={styles.info}>
                <p className={styles.nome}>{produto.nome}</p>
                <p className={styles.preco}>
                  R$ {(produto.preco * produto.quantidade).toFixed(2)}
                </p>

                <div className={styles.qtdControls}>
                  <button onClick={() => removerDoCarrinho(produto.id)}>
                    -
                  </button>
                  <span>{produto.quantidade}</span>
                  <button
                    onClick={() =>
                      adicionarAoCarrinho({ ...produto, quantidade: 1 })
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removerTodosDoProduto(produto.id)}
                className={styles.trashBtn}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg>
              </button>
            </div>
          ))
        )}
      </div>

      {agrupado.length > 0 && (
        <div className={styles.total}>
          <span>Total:</span>
          <strong>R$ {total.toFixed(2)}</strong>
        </div>
      )}
    </div>
  );
}

export default CartSidebar;
