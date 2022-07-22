import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/Home.module.scss";
import firebase from "../firebaseConfig.js";
import pfp from "../public/blankpfp.jpg";
import useAuth from "../components/authContext";
import FileImageInput from "../components/fileImageInput";
import { useRouter } from "next/router";
function Index() {
  const Router = useRouter();
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState();
  const { currentUser } = useAuth();
  const handleFireBaseUpload = async (e) => {
    setLoading(true);
    if (imageAsFile === "") {
      setErr(
        `El archivo seleccionado no es una imagen, es: ${typeof imageAsFile}`
      );
      setLoading(false);
    }
    const uploadTask = firebase
      .storage()
      .ref(`/users/${currentUser.user.uid}/pfp/pfp${currentUser.user.uid}`)
      .put(imageAsFile);
    uploadTask.on("state_changed", (snapshot) => {
      console.log(snapshot.bytesTransferred / snapshot.totalBytes);
      setProgress(
        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      );
    });
    await uploadTask
      .then(async (doc) => {
        await firebase
          .firestore()
          .collection("users")
          .doc(currentUser.user.uid)
          .get()
          .then(async (user) => {
            const url = await doc.ref.getDownloadURL();
            await user.ref
              .update({
                pfp: url,
              })
              .then((doc) => {
                setLoading(false);
                window.location = "/user";
              })
              .catch((err) => {
                setErr(err.message);
                setLoading(false);
              });
          });
      })
      .catch((err) => {
        console.log(err);
        setErr(err.message);
        setLoading(false);
      });
  };
  return (
    <>
      {currentUser && (
        <div className={styles.accessContainer}>
          <div className={styles.accessBox}>
            <div className={styles.accessForm}>
              <div className={styles.errMessageSignIn}>
                <small>{err}</small>
              </div>
              <h1 className={`${styles.textCenter}`}>
                Ingresa Tu Nueva Foto de Perfil
              </h1>
              <FileImageInput
                imageAsUrl={imageAsUrl}
                setImageAsUrl={setImageAsUrl}
                setImageAsFile={setImageAsFile}
                placeholderImage={currentUser.pfp ? currentUser.pfp : pfp.src}
              />
              <button
                className={styles.primaryButton}
                onClick={handleFireBaseUpload}
              >
                Cambiar Foto
              </button>
              {loading && (
                <div className={styles.loadingAccess}>
                  <h1>{progress}%</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Index;
