import sendVerificationEmail from "../../utils/sendVerificationEmail";
export default async function resendVerificationEmail(req, res) {
  try {
    const info = await sendVerificationEmail(req.body.email);
    console.log(info);
    res.send(200);
  } catch (err) {
    console.log(err);
    res.status(400).send("Algo salio mal, intente nuevamente");
  }
}
