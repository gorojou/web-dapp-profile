import React, { useState, useEffect, useLayoutEffect } from "react";
import styles from "../styles/Home.module.scss";
function NFTGrid({ rows, quantity, responsive }) {
  const [nft, setNft] = useState([{ title: "a" }]);
  const [numberRows, setNumberRows] = useState(rows);
  useEffect(() => {
    const app = () => {
      let nfts = [];
      for (let i = 0; i < quantity; i++) {
        nfts.push({
          title: `NFT${i + 1}`,
          background: `https://random.imagecdn.app/${
            (Math.random() * 10).toFixed() * 100
          }/${(Math.random() * 10).toFixed() * 100}`,
          price: Math.random().toFixed(3),
        });
      }
      setNft((nft) => nfts);
    };
    return app();
  }, []);
  useEffect(() => {
    function updateSize() {
      setNumberRows(window.innerWidth < 800 ? responsive : rows);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <div
      className={styles.NFTGrid}
      style={{
        gridTemplateColumns: `repeat(${numberRows}, 1fr)`,
      }}
    >
      {nft.map((doc) => {
        return (
          <div key={doc.title} className="NFTGridSection">
            <div
              className={styles.imageContainer}
              style={{
                background: `url(${doc.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className={styles.infoContainer}>
              <span
                className={`material-symbols-outlined notranslate ${styles.pink}`}
              >
                favorite
              </span>
              <h2>{doc.title}</h2>
              <h3 className={styles.black}>{doc.price}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NFTGrid;
