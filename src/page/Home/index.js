import Header from "../../components/Header";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer";
import data from "../../json/data";
import styles from "./Home.module.css";
import { useState } from "react";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <Header carrinho={[]} />

      <main className={styles.main}>
        <div className={styles.homeContent}>
          {/* esquerda - imagem */}
          <div className={styles.carouselWrapper}>
            <Carousel images={data} onSlideChange={setCurrentIndex} />
          </div>

          {/* direita - infos */}
          <div className={styles.infoWrapper}>
            <h2>{data[currentIndex].nome}</h2>
            <p className={styles.descricao}>
              {data[currentIndex].descricao}
            </p>
            <button className={styles.btn}>Saiba Mais</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;    
