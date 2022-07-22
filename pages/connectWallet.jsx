import React, { useState } from "react";
import { useBlockChainContext } from "../components/BlockchainContex";
import useAuth from "../components/authContext";
import styles from "../styles/Home.module.scss";
import Router from "next/router";
function AddWallet() {
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(false);
  const { account, connectWeb3Modal, setMessage } = useBlockChainContext();
  const { currentUser, addWallet } = useAuth();
  const newWallet = async () => {
    setLoading(true);
    try {
      await addWallet(account);
      setMessage("Wallet Agregada");
      setTimeout(() => {
        Router.push("/user");
      }, 3000);
    } catch (err) {
      console.log(err);
      setErr(err.message);
      setLoading(false);
    }
  };
  return (
    <div>
      {currentUser && (
        <div className={styles.accessContainer}>
          <div className={styles.accessBox}>
            <div className={styles.accessForm}>
              <div className={styles.errMessageSignIn}>
                <small>{err}</small>
              </div>
              <h1 className={`${styles.textCenter}`}>
                Por favor conecta una wallet
              </h1>
              <button
                className={styles.primaryButton}
                onClick={connectWeb3Modal}
              >
                Conectar Wallet
              </button>
              {loading && <div className={styles.loadingAccess}></div>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddWallet;
