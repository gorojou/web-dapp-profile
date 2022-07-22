import admin from "../../utils/db";
import nodemailer from "nodemailer";
import sendVerificationEmail from "../../utils/sendVerificationEmail";
export default async function register(req, res) {
  try {
    const user = await admin
      .auth()
      .createUser({ email: req.body.email, password: req.body.password });
    try {
      const userDocRef = admin.firestore().collection("users").doc(user.uid);
      userDocRef.set({
        creador: req.body.creador ? req.body.creador : false,
        date: new Date().toUTCString(),
        wallet: [],
      });
    } catch (err) {
      await admin.auth().deleteUser(user.uid);
      console.log(err);
    }

    res.status(200).send();
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
}
