export const protectRoute = async (req, res, next) => {
  console.log("isAuthenticated: ", req.auth().isAuthenticated);
  if (!req.auth().isAuthenticated) {
    return res
      .status(401)
      .json({ message: "Unauthorized - you must be logged in" });
  }
  next();
};
