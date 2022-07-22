import admin from "firebase-admin";
import serviceAccount from "./nft-marketplace-47647-firebase-adminsdk-9t2qi-baaf60a97a.json";

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    // admin.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
  } catch (error) {
    console.log("Firebase admin initialization error", error.stack);
  }
}
export default admin;
