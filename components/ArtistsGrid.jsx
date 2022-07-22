import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
function ArtistsGrid({ rows, quantity, responsive }) {
  const [artist, setArtist] = useState([]);
  const [numberRows, setNumberRows] = useState(rows);
  useEffect(() => {
    const app = () => {
      let artists = [];
      for (let i = 0; i < quantity; i++) {
        artists.push({
          artist: `Artista${i}`,
          background: `https://random.imagecdn.app/${
            (Math.random() * 10).toFixed() * 100
          }/${(Math.random() * 10).toFixed() * 100}`,
          listed: Math.random().toFixed(1) * 10,
          likes: Math.random().toFixed(1) * 10,
        });
      }
      setNumberRows(window.innerWidth > 600 ? rows : responsive);
      setArtist((artist) => {
        return artists;
      });
    };
    return app();
  }, []);
  useEffect(() => {
    function updateSize() {
      setNumberRows(window.innerWidth < 600 ? responsive : rows);
    }
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <>
      <div
        className={styles.NFTGrid}
        style={{
          gridTemplateColumns: `repeat(${numberRows}, 1fr)`,
        }}
      >
        {artist &&
          artist.map((doc) => {
            return (
              <div key={doc.artist} className="NFTGridSection">
                <div
                  className={styles.imageContainer}
                  style={{
                    background: `url(${doc.background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className={styles.infoContainer}>
                  <h3 className={styles.black}>Listed {doc.listed}</h3>
                  <div className={styles.titleImage}>
                    <img src="/blankpfp.jpg"></img>
                    <h2>{doc.artist}</h2>
                  </div>
                  <div className={styles.likes}>
                    <h3>{doc.likes}</h3>
                    <span
                      className={`material-symbols-outlined notranslate ${styles.pink}`}
                    >
                      favorite
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default ArtistsGrid;
