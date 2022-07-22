import admin from "../../utils/db";
import cookie from "cookie";
export default async function signInUser(req, res) {
  const idToken = req.body.idToken;
  const expiresIn = 60 * 60 * 1000;
  await admin
    .auth()
    .createSessionCookie(idToken, { expiresIn })
    .then((sessionCookie) => {
      try {
        const options = { maxAge: expiresIn, httpOnly: true };
        res.setHeader(
          "Set-Cookie",
          cookie.serialize("session", sessionCookie, options)
        );
        res.statusCode = 200;
        res.end(JSON.stringify({ status: "success" }));
      } catch (err) {
        console.log(err);
        res.status(401).send(err);
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(401).send(error.message);
    });
}
