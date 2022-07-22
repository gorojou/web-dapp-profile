import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/Home.module.scss";
function FileImageInput({
  imageAsUrl,
  setImageAsUrl,
  placeholderImage,
  setImageAsFile,
}) {
  const fileInputField = useRef(null);
  const [dropHere, setDropHere] = useState(false);
  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImageAsUrl({ imgUrl: e.target.result });
        console.log(imageAsUrl);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };
  const showDrop = () => {
    setDropHere(true);
  };
  const hideDrop = () => {
    setDropHere(false);
  };
  useEffect(() => {
    window.addEventListener("dragenter", showDrop);
    window.addEventListener("dragover", showDrop);
    window.addEventListener("drop", hideDrop);
    window.addEventListener("dragleave", hideDrop);
    return () => {
      window.removeEventListener("dragenter", showDrop);
      window.removeEventListener("dragover", showDrop);
      window.removeEventListener("drop", hideDrop);
      window.removeEventListener("dragleave", hideDrop);
    };
  }, []);
  return (
    <>
      {dropHere && (
        <div className={styles.dropHere}>
          <h3>Drop Your Image Here</h3>
        </div>
      )}
      <input
        className={styles.inputFile}
        type="file"
        style={{ pointerEvents: dropHere ? "all" : "none" }}
        ref={fileInputField}
        onChange={handleFileChange}
        title=""
        value=""
      />
      <p>Arrastra tu imagen aca o</p>
      <button
        type="button"
        className={styles.thirdButton}
        onClick={() => handleUploadBtnClick()}
      >
        <span>Sube una imagen</span>
      </button>

      <div
        className={`${styles.profileImageViewer} ${styles.inputImage} ${styles.m10}`}
      >
        <div
          style={{
            backgroundImage: `url(${
              imageAsUrl.imgUrl == "" ? placeholderImage : imageAsUrl.imgUrl
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </div>
    </>
  );
}

export default FileImageInput;
