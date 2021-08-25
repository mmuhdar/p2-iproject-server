const error = (err, req, res, next) => {
  switch (err.name) {
    case "NotFound":
      res.status(404).json({ message: "Not Found" });
      break;
    case "InvalidParams":
      res.status(400).json({ message: "Invalid params input" });
      break;
    case "Forbidden":
      res.status(403).json({ message: "You dont have permission" });
      break;
    case "Unauthorized":
      res.status(401).json({ message: "Email/password invalid" });
      break;
    case "InvalidToken":
      res.status(400).json({ message: "access token required" });
      break;
    case "JsonWebTokenError":
      res.status(400).json({ message: "Invalid token signature" });
      break;
    case "TokenExpiredError":
      res.status(400).json({ message: "access token expired" });
      break;

    default:
      res.status(500).json({ message: "internal server error" });
      break;
  }
  console.log(err);
};

module.exports = error;
