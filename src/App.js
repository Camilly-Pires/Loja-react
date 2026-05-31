import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./page/Home";
import Products from "./page/Products";
import Login from "./page/Login";
import CartSidebar from "./components/CartSidebar";
import PageNotFound from "./page/PageNotFound";

function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prev) => [...prev, produto]);
  };

  const removerDoCarrinho = (id) => {
    const index = carrinho.findIndex((item) => item.id === id);
    if (index !== -1) {
      const novoCarrinho = [...carrinho];
      novoCarrinho.splice(index, 1);
      setCarrinho(novoCarrinho);
    }
  };

  const removerTodosDoProduto = (id) => {
    setCarrinho((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleCarrinho = () => setCarrinhoAberto((v) => !v);

  return (
    <BrowserRouter>
      <CartSidebar
        aberto={carrinhoAberto}
        carrinho={carrinho}
        adicionarAoCarrinho={adicionarAoCarrinho}
        removerDoCarrinho={removerDoCarrinho}
        removerTodosDoProduto={removerTodosDoProduto}
        toggleCarrinho={toggleCarrinho}
      />

      <main>
        <Routes>
          <Route
            path="/" element={<Home />}
          />
          <Route
            path="/Produtos"
            element={
              <Products
                adicionarAoCarrinho={adicionarAoCarrinho}
                carrinho={carrinho}
                toggleCarrinho={toggleCarrinho}
              />
            }
          />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
