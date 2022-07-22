import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Home.module.scss";
import pfp from "../public/blankpfp.jpg";
import useAuth from "../components/authContext";
import Router from "next/router";
import CopyToClipboard from "../components/CopyToClipboard";
import Link from "next/link";
function User() {
  const { currentUser, validateWeb3 } = useAuth();
  const [edit, setEdit] = useState(false);
  const usernameInput = useRef();
  const [err, setErr] = useState();
  const [contentSection, setContentSection] = useState("");
  useEffect(() => {
    if (!currentUser) Router.push("/");
    if (usernameInput.current)
      usernameInput.current.style.width = `${
        (usernameInput.current.value.length + 1) * 14
      }px`;
  }, []);
  useEffect(() => {
    setContentSection(Router.query.section);
    validateWeb3();
  }, [Router.query.section]);

  useEffect(() => {
    if (err) {
      setTimeout(() => {
        setErr("");
      }, 3000);
    }
  }, [err]);

  return (
    <>
      {currentUser && (
        <div className={`${styles.paginaPerfil}`}>
          <div
            className={`${styles.cajaBlanca2} ${styles.fondoBlanco} ${styles.perfilInfo}`}
          >
            <>
              <div
                className={`${styles.profileImageViewer} ${styles.imagenPerfilPerfil}`}
                onClick={() => Router.push("/agregarImagen")}
              >
                <div
                  style={{
                    backgroundImage: `url(${
                      currentUser.pfp ? currentUser.pfp : pfp.src
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "100%",
                    width: "100%",
                  }}
                ></div>
                <div className={styles.imagenPerfilHoverLink}>
                  <p className={`${styles.textLead} my-auto`}>
                    Cambiar Foto de perfil
                  </p>
                </div>
              </div>
              <div className={styles.errMessageSignIn}>
                <small>{err}</small>
              </div>
            </>

            <div className={styles.userLinks}>
              <Link href={"/user?section=wallets"} passHref shallow={true}>
                <div className={styles.userLink}>
                  <span className="material-symbols-outlined notranslate">
                    account_balance_wallet
                  </span>
                  <p className={styles.textLead}>Wallets</p>
                </div>
              </Link>

              {/* <Link href={"/changeEmail"}>
                <div className={styles.userLink}>
                  <span className="material-symbols-outlined notranslate">
                    mail
                  </span>
                  <p className={styles.textLead}>Cambia tu email</p>
                </div>
              </Link> */}
            </div>
            <div className={styles.statsPlaceHolder}>
              <h1 className={`${styles.secondaryTitle} ${styles.darkBlue}`}>
                Informacion y Configuracion del usuario
              </h1>
            </div>
          </div>
          <GetComponent contentSection={contentSection} />
        </div>
      )}
    </>
  );
}
const GetComponent = ({ contentSection }) => {
  switch (contentSection) {
    case "wallets":
      return <Wallets />;
      break;
    default:
      return (
        <div className={`${styles.cajaBlanca2} ${styles.perfilContenido}`}>
          <h1 className={styles.primaryTitle}>Contenido</h1>
        </div>
      );
      break;
  }
};
const Wallets = () => {
  const { currentUser, wallets } = useAuth();
  return (
    <>
      <div className={`${styles.cajaBlanca2} ${styles.perfilContenido}`}>
        <h1 className={`${styles.secondaryTitle} ${styles.m0}`} id="wallets">
          Mis Wallets
        </h1>
        <hr />
        <button
          className={`${styles.primaryButton} ${styles.w100} ${styles.mb}`}
          onClick={() => Router.push("/addWallet")}
        >
          <h2>Guardar Nueva Wallet</h2>
        </button>
        <div className={styles.walletBox}>
          {wallets && wallets.length ? (
            <>
              {wallets.map((doc) => {
                return (
                  <div key={doc.wallet} className={styles.textLead}>
                    {doc.wallet}
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <p className={styles.textLead}>
                No tienes ninguna wallet guardada, guarda una wallet con
                metamask!
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default User;
