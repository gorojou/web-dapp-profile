import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/Home.module.scss";
import { useRouter } from "next/router";
import Router from "next/router";
import axios from "axios";
import useAuth from "../components/authContext";
function Index() {
  const { currentUser, changeEmail } = useAuth();

  const Router = useRouter();
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
      await changeEmail(login.email);
      Router.post("/user");
    } catch (err) {
      setErr(err.message);
      if (err.code === "auth/email-already-in-use") {
        setErr("Correo ya registrado");
      }
      if (err.code === "auth/requires-recent-login") {
        setErr(
          "Esta operacion es delicada y requiere una sesion reciente, por favor cierra sesion e ingresa otra vez antes de volver a intentar cambiar correo"
        );
      }
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
            <h1 className={`${styles.textCenter}`}>
              Introduce correo al que quieras cambiar
            </h1>
            <p>Al cambiar de correo tu sesión terminará</p>
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
                Cambiar Correo
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
