import React, { useState } from "react";
import styles from "../styles/Home.module.scss";
function PreguntasFrecuentes({ title, text }) {
  const [showQ, setShowQ] = useState(false);
  return (
    <div className={styles.pregunta}>
      <h1
        onClick={() => setShowQ(!showQ)}
        className={`${styles.secondatyTitle}`}
      >
        <span className="material-symbols-outlined notranslate">
          {showQ ? "keyboard_arrow_down" : "chevron_right"}
        </span>

        {title}
      </h1>
      {showQ && (
        <div className={styles.textoPregunta}>
          <p className={styles.textLead}>{text}</p>
        </div>
      )}
    </div>
  );
}

export default PreguntasFrecuentes;
