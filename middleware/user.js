import { body, validationResult } from "express-validator";

export const userValidation = () => {
  return [
    body("email").isEmail().normalizeEmail().withMessage("Email tidak valid"),
    body("username").notEmpty().isLength({ min: 3 }),
    body("full_name")
      .notEmpty()
      .isLength({ min: 3 })
      .withMessage("Nama harus berupa huruf minimal 3"),
    body("password")
      .notEmpty()
      .isLength({ min: 6 })
      .withMessage("password harus diisi minimal 6 karakter"),
  ];
};

export const userHandle = (req, res, next) => {
  const error = validationResult(req);
  const { password, confirmPassword, role } = req.body;

  if (password !== confirmPassword) {
    return res
      .status(409)
      .json({ type: "error", on: "password", message: "password tidak sama" });
  }
  if (!error.isEmpty()) {
    return res.status(400).json({ error });
  }
  next();
};
