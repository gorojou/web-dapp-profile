import React, { useState } from "react";
import styles from "../../styles/Home.module.scss";
import useAuth from "../../components/authContext";
import Router from "next/router";
function Login() {
  const { logIn } = useAuth();
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(false);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const loginUser = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      await logIn(login.email, login.password);
      setLoading(false);
    } catch (err) {
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
  return (
    <>
      {loading && <div className={styles.loadingAccess}></div>}

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
        <div className={styles.formInputArea}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            value={login.password}
            onChange={handleChange}
            id="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" className={styles.primaryButton}>
          <p>Ingresar</p>
        </button>
      </form>
    </>
  );
}

export default Login;
