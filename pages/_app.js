import React, { useEffect } from "react";
import "../styles/globals.scss";
import "../public/particles/css/style.css";
import { NavbarWrapper } from "../components/NavbarWrapper";
import "../public/particles/css/particles.css";
import { AuthProvider } from "../components/authContext";
import { BlockchainContext } from "../components/BlockchainContex";
import Head from "next/head";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const app = () => {
      const script = document.createElement("script");
      script.src = "/particles/js/particles.js";
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
        <title>Marketplace LB</title>
        <meta name="description" content="NFT Marketplace" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
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
        <link
          target="_blank"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <BlockchainContext>
        <AuthProvider>
          <NavbarWrapper>
            <Component {...pageProps} />
          </NavbarWrapper>
        </AuthProvider>
      </BlockchainContext>
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></Script>
      <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></Script>
    </>
  );
}

export default MyApp;
