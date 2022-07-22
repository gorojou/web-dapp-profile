import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/Home.module.scss";
import Router from "next/router";
import axios from "axios";
function Index() {
  const [loading, setLoading] = useState(false);
  const [allow, setAllow] = useState(true);
  const [err, setErr] = useState();
  const [message, setMessage] = useState();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("/api/changePassword", { email: login.email });
      Router.push("/");
    } catch (err) {
      console.log(err);
      setErr(err.message);
      setLoading(false);
    }
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setLogin((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
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
              Introduce tu correo al cual le enviaremos el link para que cambies
              tu contraseña
            </h1>
            <form className={styles.form} id="login" onSubmit={loginUser}>
              <div className={styles.errMessageSignIn}>
                <small>{err}</small>
              </div>
              <div className={styles.formInputArea}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={login.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>

              <button className={styles.primaryButton} type="submit">
                Enviar Correo
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
