export const protect = (req, res, next) => {
  const accessToken = req.headers.authorization.split(" ")[1];

  next();
};
