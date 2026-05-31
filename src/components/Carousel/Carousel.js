import { useRef, useState, useEffect } from "react";
import styles from "./Carousel.module.css";

const Carousel = ({ images = [], onSlideChange }) => { //onSlideChange avisar o Home.js qual índice está ativo e aparece as informaçoes.
  const itemsRef = useRef([]);
  const [index, setIndex] = useState(0);

  // sempre que trocar a lista de imagens, reseta pro primeiro slide
  useEffect(() => {
    setIndex(0);
    if (itemsRef.current[0]) {
      itemsRef.current[0].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
      onSlideChange?.(0);
    }
  }, [images, onSlideChange]);

  const goToIndex = (newIndex) => {
    if (images.length === 0) return;

    const len = images.length;
    const normalized = ((newIndex % len) + len) % len;
    setIndex(normalized);

    const el = itemsRef.current[normalized];
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
    onSlideChange?.(normalized);
  };

  const incrementCarousel = (delta) => goToIndex(index + delta);

  return (
    <div>
      <button
        className={`${styles.carouselBtn} ${styles.leftBtn}`}
        onClick={() => incrementCarousel(-1)}
        aria-label="Anterior"
      />

      <div className={styles.carouselViewport}>
        <div className={styles.carouselTrack}>
          {images.map((img, idx) => (
            <div
              className={styles.carouselItem}
              key={img.id ?? idx}
              ref={(el) => (itemsRef.current[idx] = el)}
            >
              <img
                src={img.imagem ?? img.src}
                alt={img.nome ?? img.alt `slide-${idx}`}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className={`${styles.carouselBtn} ${styles.rightBtn}`}
        onClick={() => incrementCarousel(1)}
        aria-label="Próximo"
      />
    </div>
  );
};

export default Carousel;
