import jwt from "../utils/jwt.js";

function parseCookieHeader(cookieHeader) {
  if (!cookieHeader) return {};
  return cookieHeader.split(";").reduce((acc, pair) => {
    const [k, ...v] = pair.split("=");
    if (!k) return acc;
    acc[k.trim()] = decodeURIComponent(v.join("=").trim());
    return acc;
  }, {});
}

const auth = (req, res, next) => {
  // Prefer cookie-parser's parsed cookies if available
  let token = undefined;

  if (req.cookies && req.cookies.authToken) {
    token = req.cookies.authToken;
  } else {
    const cookies = parseCookieHeader(req.headers && req.headers.cookie);
    token = cookies.authToken;
  }

  if (!token) return res.status(401).send("User not authenticated.");

  try {
    const data = jwt.verifyToken(token);
    req.user = data;
    next();
  } catch (error) {
    return res.status(401).send("User not authenticated.");
  }
};

export default auth;