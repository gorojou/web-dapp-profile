import React, { useState } from "react";
import styles from "../styles/Home.module.scss";
function CopyToClipboard({ value }) {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  return (
    <div
      className={`${styles.copyToClipboard} ${styles.w100} ${styles.textCenter}`}
    >
      <input
        type="text"
        readOnly
        value={value}
        className={copied && styles.copied}
      />
      <span
        className={`material-symbols-outlined notranslate ${
          copied && styles.copied
        }`}
        onClick={() => copyToClipboard()}
      >
        content_copy
      </span>
    </div>
  );
}

export default CopyToClipboard;
