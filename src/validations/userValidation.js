const { check } = require("express-validator");


const validateRegister = [
  check("name")
    .notEmpty()
    .withMessage("Debes completar este campo")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Debe incluir al menos 3 caracteres"),
  check("last_name")
    .notEmpty()
    .withMessage("Debes completar este campo")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Debe incluir al menos 3 caracteres"),
  check("email")
    .notEmpty()
    .withMessage("Debes completar este campo")
    .bail()
    .isEmail()
    .withMessage("Tienes que completar un email valido"),
  check("password")
    .notEmpty()
    .withMessage("Debes completar este campo")
    .bail()
    .isNumeric({ no_symbols: true })
    .withMessage("Debes colocar una contraseña númerica, sin simbolos"),
];

module.exports = validateRegister;
