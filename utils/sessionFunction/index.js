import admin from "../db";
export default async function checkUser(sessionCookie) {
  return await admin
    .auth()
    .verifySessionCookie(sessionCookie, true)
    .then((decodedClaims) => {
      return decodedClaims;
    })
    .catch((error) => {
      return error;
    });
}
