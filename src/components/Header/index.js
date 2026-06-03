import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header({ carrinho, toggleCarrinho }) {
  return (
    <nav className={styles.nav}>
      {/* Logo + Texto */}
      <div className={styles.logoWrapper}>
        <img src="/Loja-react/image/Eletronics.jpg" alt="Logo da Loja" />
        <span className={styles.logoText}>Electronics</span>
      </div>

      {/* Barra de pesquisa */}
      <div className={styles.searchContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Pesquisar produtos..."
        />
        <button className={styles.searchButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
      </div>

      {/* Menu e Carrinho */}
      <div className={styles.menuContainer}>
        <ul className={styles.menu}>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? styles.active : undefined}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Produtos" className={({ isActive }) => isActive ? styles.active : undefined}>
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink to="/Login" className={({ isActive }) => isActive ? styles.active : undefined}>
              Login
            </NavLink>
          </li>
        </ul>

        {/* Carrinho */}
        <button onClick={toggleCarrinho} className={styles.carrinhoBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-cart4"
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
          </svg>
          {carrinho.length > 0 && (
            <span className={styles.contador}>{carrinho.length}</span>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Header;
