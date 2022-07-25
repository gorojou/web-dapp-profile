import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/Home.module.scss";
import useAuth from "./authContext";
import logo from "../public/1c12.png";
import Link from "next/link";
import pfp from "../public/blankpfp.jpg";
import marketplace from "../public/marketplace.png";
import { useBlockChainContext } from "./BlockchainContex";
import Router, { useRouter } from "next/router";
const NavContext = React.createContext();
export default function useNav() {
  return useContext(NavContext);
}
export function NavbarWrapper({ children }) {
  const { connectWeb3Modal, instance, account } = useBlockChainContext();
  const [eyeAnimation, setEyeAnimation] = useState(false);
  const [pfpMenuToggler, setPfpMenuToggler] = useState(false);
  const { currentUser, logOut, validateWeb3 } = useAuth();
  const [collapse, setCollapse] = useState(false);
  const router = useRouter();
  const handleNavCollapse = () => setCollapse(!collapse);

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-collapse navbar-light color-set">
        <div className="logo">
          <Link className="navbar-brand" href="/">
            <img src={logo.src} alt="" />
          </Link>
        </div>
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded={!collapse ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${collapse ? "collapse" : ""}  ml-auto navbar-collapse`}
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav ml-auto">
            <div className="nav-left">
              <li className="nav-item">
                <Link href="https://dapp-nft-marketplace.vercel.app/">

                  <a>
                    <img src={marketplace.src} alt="" />
                    <p>Marketplace</p>
                  </a>
                </Link>
              </li>
              {currentUser ? (
                <>
                  <li className="nav-item">
                    <Link href="/user">
                      <a>
                        <span className="material-symbols-outlined notranslate">
                          account_circle
                        </span>
                        <p>Mi espacio</p>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/user?section=wallets">
                      <a>
                        <span className="material-symbols-outlined notranslate">
                          account_balance_wallet
                        </span>
                        <p>Mis Wallets</p>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <div className={styles.pfpContainer}>
                      <div
                        onClick={() => setPfpMenuToggler(!pfpMenuToggler)}
                        className={`${styles.profileImageViewer} ${styles.pfp}`}
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
                      </div>

                      {pfpMenuToggler && (
                        <div className={styles.pfpLinkContainer}>
                          <div className={styles.pfpLink}>
                            <Link href="/user">
                              <a>Perfil</a>
                            </Link>
                          </div>
                          <div className={styles.pfpLink}>
                            <div onClick={() => logOut()}>
                              <a>Cerrar Sesión</a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className={`${styles.buttons}`}
                      onClick={() => (!account ? connectWeb3Modal() : "")}
                    >
                      <button className={styles.primaryButton}>
                        {account ? account : "Connect Wallet"}
                      </button>
                    </div>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href={"/access?form=1"} passHref>
                      <a className={styles.thirdButton}>
                        <p>Ingresa</p>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/access?form=0"} passHref>
                      <a className={styles.primaryButton}>
                        <p>Registrate</p>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item space P-3"></li>
                </>
              )}
            </div>
          </ul>
        </div>
      </nav>
      <NavContext.Provider value={{ setEyeAnimation, eyeAnimation }}>
        {children}
      </NavContext.Provider>
    </>
  );
}
