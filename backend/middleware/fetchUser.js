const jwt = require("jsonwebtoken");
const JWT_SECRET = "Kushak usb hjb";

const fetchUser = (req, res, next) => {
  // get user from jwt and add it to req object
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please send valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please send valid token" });
  }
};

module.exports = fetchUser;
