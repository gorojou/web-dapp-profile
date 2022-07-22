import admin from "../../utils/db";
import cookie from "cookie";
import checkUser from "../../utils/sessionFunction";
export default async function changeUsername(req, res) {
  const user = await checkUser(cookie.parse(req.headers.cookie).session);
  const userRef = await admin.firestore().collection("users").doc(user.uid);
  const match = await admin
    .firestore()
    .collection("users")
    .where("username", "==", req.body.newUsername);
  try {
    await admin.firestore().runTransaction(async (transaction) => {
      return transaction.get(match).then((usernameMatch) => {
        if (usernameMatch.empty) {
          return transaction.update(userRef, {
            username: req.body.newUsername,
          });
        }
        throw "Nombre de usuario ya escogido";
      });
    });
    res.send(200);
  } catch (err) {
    res.status(400).send(err);
  }
}
