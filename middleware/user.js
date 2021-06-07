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
      .isLength({ min: 7 })
      .withMessage("password harus diisi minimal 7 karakter"),
    body("role").isNumeric("1"),
    body("no_identitas")
      .notEmpty()
      .withMessage("nomer identitas harus diisi contoh: NIM, NISN dll"),
  ];
};

export const userHandle = (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ error });
  }
  next();
};
