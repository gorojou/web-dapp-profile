import React, { useEffect } from "react";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import logo from "../public/1c14.png";
import facebook from "../public/facebook.png";
import twitter from "../public/twitter.png";
import youtube from "../public/youtube.png";
import discord from "../public/discord.png";
import medium from "../public/medium.png";
import github from "../public/github.png";
import gitlab from "../public/gitlab.png";
import Particles from "./Particles";
import div from "./isVisible";
function Footer() {
  return (
    <div className={`${styles.footer}`}>
      <Particles id={"particles-js-footer"} color={"#d5c21a"} />
      <div className={styles.footerTitleSection}>
        <div>
          <div>
            <img src={logo.src} />
            <h1 className={`${styles.textCenter}`}>
              Siguenos en nuestras redes sociales
            </h1>
          </div>
        </div>
      </div>
      <div className={styles.footerLinkSectionContainer}>
        <div
          className={`${styles.footerLinkSection} ${styles.p5} ${styles.textLead}`}
        >
          <h1 className={``}>Documentación</h1>

          <Link href={"https://github.com"}>
            <div className={styles.linkSection}>
              <img src={github.src} className={styles.linkImage} />
              <a>Github</a>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
