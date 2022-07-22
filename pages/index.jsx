import React from "react";
import FadeInSection from "../components/isVisible";
import styles from "../styles/Home.module.scss";
import useAuth from "../components/authContext";
import Footer from "../components/Footer";
import logo from "../public/1c12.png";
import Particles from "../components/Particles";
function Landing() {
  const { currentUser } = useAuth();
  return (
    <>
      <section className={styles.blackBackgorund}>
        <div className={`${styles.jumbotronLanding}`}>
          <Particles />
          <div className={`${styles.tituloJumbo}`}>
            <FadeInSection>
              <img src={logo.src} className={styles.float} alt="" />
            </FadeInSection>
          </div>
        </div>
        <div className={`${styles.content} `}>
          <FadeInSection>
            <div className={styles.textCenter}>
              <h1 className={`${styles.secondaryTitle}`}>MARKETPLACE LB</h1>
              <p className={`${styles.textLead} `}>
                Prueba de concepto para marketplace de la red Latam Blockchain
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Landing;
