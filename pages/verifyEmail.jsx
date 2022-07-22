import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/Home.module.scss";
import { useRouter } from "next/router";
import axios from "axios";
function Index() {
  const Router = useRouter();
  const [loading, setLoading] = useState(false);
  const [allow, setAllow] = useState(true);
  const [message, setMessage] = useState();
  const resendEmail = async () => {
    if (!allow)
      return setMessage("Espera unos momentos antes de re-enviar el correo");
    setLoading(true);
    setAllow(false);
    try {
      await axios.post("/api/resendVerificationEmail", {
        email: Router.query.email,
      });
      setMessage("Email re-enviado");
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setMessage("Algo salio mal, vuelva a intentar");
    }
    setTimeout(() => {
      setAllow(true);
    }, 1000 * 60);
  };
  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }, [message]);

  return (
    <>
      <div className={styles.accessContainer}>
        <div className={styles.accessBox}>
          <div className={styles.accessForm}>
            {loading && <div className={styles.loadingAccess}></div>}
            {message && <p>{message}</p>}
            <h1 className={`${styles.textCenter} ${styles.darkBlue}`}>
              Por favor verifica tu correo antes de ingresar
            </h1>
            <button
              className={`${styles.thirdButton} ${styles.m10}`}
              onClick={() => {
                resendEmail();
              }}
            >
              Enviar verificacion al correo
            </button>
            <button
              className={styles.primaryButton}
              onClick={() => {
                Router.push("/access?form=1");
              }}
            >
              Ingresar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
