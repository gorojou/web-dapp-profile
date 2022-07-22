import React, { useState, useEffect } from "react";
import Login from "./Login";
import Register from "./Register";
import styles from "../../styles/Home.module.scss";
import Head from "next/head";
import Script from "next/dist/client/script";
import Particles from "../../components/Particles";
import { useRouter } from "next/router";

function Access() {
  const router = useRouter();
  const [form, setForm] = useState(router.query.form === "0");
  useEffect(() => {
    const app = () => {
      const script = document.createElement("script");
      script.src = "/particles/js/app.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    };
    return app();
  }, []);
  return (
    <>
      <Head>
        <title>NFT Marketplace</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Head>
      <div
        className={styles.main}
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Particles />
        <div className={styles.accessContainer}>
          <div className={styles.accessBox}>
            <div className={styles.accessForm}>
              <div className={styles.selectForm}>
                <div
                  className={`${styles.selectFormButton} ${styles.signIn} ${
                    form ? `${styles.activeSection}` : ""
                  }`}
                  onClick={() => setForm(true)}
                >
                  <h4>Registrate</h4>
                </div>
                <div
                  className={`${styles.selectFormButton} ${styles.logIn} ${
                    !form ? `${styles.activeSection}` : ""
                  }`}
                  onClick={() => setForm(false)}
                >
                  <h4>Ingresa</h4>
                </div>
              </div>
              {form ? <Register></Register> : <Login></Login>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Access;
