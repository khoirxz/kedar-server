import jwt from "jsonwebtoken";

const accessTokenSecret = "kedarsukses";

export const isAuth = (req, res, next) => {
  try {
    const token = req.headers.token;
    const decoded = jwt.verify(token, accessTokenSecret);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
  }
};

export const isAuthrorize = (req, res, next) => {
  if (req.user.role === 0) {
    next();
  } else {
    res.status(401).json({
      message: "not allowed",
    });
  }
};
