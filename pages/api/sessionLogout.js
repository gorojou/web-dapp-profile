import cookie from "cookie";
export default async function sessionLogout(req, res) {
  console.log("loging Out");
  const expiresIn = new Date(0);
  const options = { expires: expiresIn, httpOnly: true };
  res.setHeader("Set-Cookie", cookie.serialize("session", "", options));
  res.statusCode = 200;
  res.end(JSON.stringify({ status: "success" }));
}
