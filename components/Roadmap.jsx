import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.scss";
import FadeInSection from "./isVisible";
const FadeInRoadmap = ({ children }) => {
  const domRef = useRef();

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // In your case there's only one element to observe:
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true);
        // No need to keep observing:
        observer.unobserve(domRef.current);
      }
    });

    observer.observe(domRef.current);

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <li
      ref={domRef}
      className={isVisible ? styles.roadmapFadeIn : styles.roadmapFade}
    >
      {children}
    </li>
  );
};

function Roadmap() {
  return (
    <>
      <div className={styles.containerRoadmap} id="roadmap">
        <div className={`${styles.roadmap} ${styles.white}`}>
          <ul>
            <FadeInRoadmap>
              <div className={styles.roadmapContent}>
                <h1>MAYO 2020</h1>
                <hr className={styles.hrRoadmap} />
                <p>Desarrollo y consenso de ideas</p>
              </div>
            </FadeInRoadmap>
            <FadeInRoadmap>
              <div className={styles.roadmapContent}>
                <h1>Noviembre 2020</h1>
                <hr className={styles.hrRoadmap} />
                <p>Integración del equipo Blockchain y Web</p>
              </div>
            </FadeInRoadmap>
            <FadeInRoadmap>
              <div className={styles.roadmapContent}>
                <h1>Julio 2021</h1>
                <hr className={styles.hrRoadmap} />
                <p>
                  Elección del nombre <b>DISCOPER</b>
                </p>
              </div>
            </FadeInRoadmap>
            <FadeInRoadmap>
              <div className={styles.roadmapContent}>
                <h1>Mayo 2022</h1>
                <hr className={styles.hrRoadmap} />
                <p>Compra de dominio y creación de RRSS</p>
              </div>
            </FadeInRoadmap>
            <FadeInRoadmap>
              <div className={styles.roadmapContent}>
                <h1>Mayo 2022</h1>
                <hr className={styles.hrRoadmap} />
                <p>Creación de Imagen Corporativa y paquete gráfico</p>
              </div>
            </FadeInRoadmap>
            <FadeInRoadmap>
              <div className={styles.roadmapContent}>
                <h1>2do trimestre del 2022</h1>
                <hr className={styles.hrRoadmap} />
                <p>
                  Inicio de desarrollo web, integración a web3 y creación de
                  contratos inteligentes para el Marketplace
                </p>
                <p>Integración del artista digital</p>
                <p>Selección del arte y Motivo de la colección fundadora</p>
                <p>
                  Lanzamiento y pruebas del Marketplace <b>DISCOPER</b>{" "}
                </p>
              </div>
            </FadeInRoadmap>
            <FadeInRoadmap>
              <div className={styles.roadmapContent}>
                <h1>3er Trimestre del 2022</h1>
                <hr className={styles.hrRoadmap} />
                <p>Primer Minteo del 10% Colección Founder</p>
                <p>
                  Inicia campaña de marketing anunciando el día de venta pública
                  10%
                </p>
                <p>
                  A una fecha y hora previa, se hará la venta pública de 554 NFT
                  FOUNDER
                </p>
              </div>
            </FadeInRoadmap>
            <FadeInRoadmap>
              <div className={styles.roadmapContent}>
                <h1>4to Trimestre del 2022</h1>
                <hr className={styles.hrRoadmap} />
                <p>
                  Se de acceso a los socios al Marketplace para que puedan crear
                  sus propias colecciones
                </p>
                <p>Segundo Minteo y venta 20% Colección FOUNDER</p>
                <p>Integración perfil de Socio y servicio STREAMING y PPV</p>
              </div>
            </FadeInRoadmap>
            <FadeInRoadmap>
              <div className={styles.roadmapContent}>
                <h1>Fecha a determinar por la comunidad</h1>
                <hr className={styles.hrRoadmap} />
                <p>Tercer Minteo y venta 20% Colección FOUNDER</p>
                <p>Cuarto Minteo y venta 20% Colección FOUNDER</p>
                <p>Quinto Minteo y venta 20% Colección FOUNDER</p>
                <p>Sexto Minteo y venta 10% Colección FOUNDER</p>
              </div>
            </FadeInRoadmap>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Roadmap;
