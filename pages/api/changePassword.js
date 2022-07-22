import admin from "../../utils/db";
import sendPasswordEmail from "../../utils/sendPasswordEmail";
export default async function changePassword(req, res) {
  try {
    await sendPasswordEmail(req.body.email);
    res.send(200);
  } catch (err) {
    res.status(400).send(err);
  }
}
