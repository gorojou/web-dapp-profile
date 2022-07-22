import React, { useContext, useState, useEffect } from "react";
import { auth, firestore } from "../firebaseConfig";
import Router, { useRouter } from "next/router";
import axios from "axios";
import Loading from "./Loading";
import { useBlockChainContext } from "./BlockchainContex";
const AuthContext = React.createContext();
export default function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const router = useRouter();
  const { account, setMessage, connectWeb3Modal } = useBlockChainContext();
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [wallets, setWallets] = useState([]);
  const logIn = async (email, password, agregarImagen) => {
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);
      if (!user.user.emailVerified)
        throw { message: "Por favor verifica tu correo" };
      await axios.post("/api/signInUser", {
        idToken: await user.user.getIdToken(),
      });
      return agregarImagen ? Router.push("/agregarImagen") : Router.push("/");
    } catch (err) {
      if (err.code === "auth/wrong-password")
        throw { message: "Datos invalidos" };
      if (err.code === "auth/user-not-found")
        throw { message: "Usuario no existe" };

      throw err;
    }
  };
  const changeEmail = async (email) => {
    await currentUser.user.updateEmail(email);
  };
  const addWallet = async (wallet) => {
    const walletMatch = await firestore
      .collection("users")
      .doc(currentUser.user.uid)
      .collection("wallets")
      .doc(wallet)
      .get();
    if (await walletMatch.exists) {
      throw { message: "Wallet ya registrada" };
    }
    console.log(await walletMatch.exists);
    await walletMatch.ref.set({ wallet: wallet, main: false });
  };
  const getWallets = async (user) => {
    let contenedor = [];
    await firestore
      .collection("users")
      .doc(user ? user.uid : currentUser.user.uid)
      .collection("wallets")
      .get()
      .then(async (wallets) => {
        wallets.docs.map((wallet) => {
          // console.log(wallet.data());
          contenedor.push(wallet.data());
          // setWallets((w) => w.concat(wallet.data()));
        });
      });
    return contenedor;
  };
  const signUp = async (email, password, creador) => {
    alert(creador);
    try {
      let tries = 0;
      while (true) {
        if (tries == 3) break;
        try {
          tries++;
          const res = await axios.post("/api/register", {
            email,
            password,
            creador,
          });
          break;
        } catch (err) {
          console.log(err);
          if (
            err.response.data ===
            "The email address is already in use by another account."
          )
            throw err;
          throw { response: { data: "Algo salio mal, intente nuevamente" } };
        }
      }
      logIn(email, password, true);
      return Router.push(`/user`);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  const logOut = async (goToStart) => {
    setLoading(true);
    await axios.get("/api/sessionLogout");
    await auth.signOut();
    setLoading(false);
    if (!goToStart) {
      return Router.push("/");
    }
  };
  const validateWeb3 = async (connect) => {
    if (connect && !account) return await connectWeb3Modal();
    try {
      if (!account) {
        setMessage("Por favor conecta una wallet");
        return Router.push("/connectWallet?walletCheck=1");
      }
      if (Router.query.walletCheck === "1") return Router.push("/user");
      return;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (!currentUser) return;
    validateWeb3();
  }, [account]);
  useEffect(() => {
    console.log(wallets);
  }, [wallets]);

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged(async (user) => {
      if (user) {
        setLoading(true);
        try {
          let tries = 0;
          while (true) {
            if (tries == 3) break;
            try {
              tries++;
              await axios.post("/api/signInUser", {
                idToken: await user.getIdToken(),
              });
              break;
            } catch (err) {
              console.log(err);
            }
          }
          const firestoreUserDoc = await firestore
            .collection("users")
            .doc(user.uid)
            .get();
          setCurrentUser({ user, ...firestoreUserDoc.data() });
          setWallets(await getWallets(user));
          setLoading(false);
          await validateWeb3(true);
        } catch (err) {
          setMessage("Algo salio mal");
          console.log(err);
          logOut();
          setLoading(false);
        }
        return;
      }
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  const changeUsername = async (newUsername) => {
    await axios.post("/api/changeUsername", {
      newUsername,
    });
  };
  const value = {
    currentUser,
    changeEmail,
    validateWeb3,
    addWallet,
    wallets,
    getWallets,
    setWallets,
    logIn,
    logOut,
    signUp,
  };
  return (
    <AuthContext.Provider value={value}>
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  );
}
