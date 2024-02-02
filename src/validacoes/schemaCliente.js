const Joi = require("joi");

const clienteSchema = Joi.object({
  nome: Joi.string().max(70).required().messages({
    "string.base": "O campo nome deve ser uma string.",
    "string.empty": "O campo nome não pode estar vazio.",
    "string.max": "O nome não pode ultrapassar 70 caracteres",
    "any.required": "O campo nome é obrigatório",
  }),
  email: Joi.string().email().trim().max(100).required().messages({
    "string.empty": "O campo email não pode ser vazio.",
    "string.email": "O campo email precisa ter um tipo válido.",
    "string.max": "O email não pode ultrapassar 100 caracteres.",
    "any.required": "O campo email é obrigatório.",
  }),
  cpf: Joi.string()
    .pattern(/^\d{11}$/)
    .required()
    .messages({
      "string.pattern.base":
        "O CPF deve conter exatamente 11 dígitos numéricos.",
      "string.base": "O campo CPF deve ser uma string.",
      "string.empty": "O campo CPF não pode estar vazio.",
      "any.required": "O campo CPF é obrigatório.",
    }),
  cep: Joi.string()
    .pattern(/^\d{8}$/)
    .messages({
      "string.pattern.base":
        "O CEP deve conter exatamente 8 dígitos numéricos.",
      "string.base": "O campo CEP deve ser uma string.",
    }),
  rua: Joi.string().max(80).messages({
    "string.max": "O campo rua possui um limite de 80 caracteres.",
    "string.base": "O campo rua deve ser uma string.",
  }),
  numero: Joi.string().max(20).messages({
    "string.max": "O campo numero possui um limite de 20 caracteres.",
    "string.base": "O campo numero deve ser uma string.",
  }),
  bairro: Joi.string().max(80).messages({
    "string.max": "O campo bairro possui um limite de 80 caracteres.",
    "string.base": "O campo bairro deve ser uma string.",
  }),
  cidade: Joi.string().max(50).messages({
    "string.max": "O campo cidade possui um limite de 50 caracteres.",
    "string.base": "O campo cidade deve ser uma string.",
  }),
  estado: Joi.string().max(50).messages({
    "string.max": "O campo estado possui um limite de 50 caracteres.",
    "string.base": "O campo estado deve ser uma string.",
  }),
});

module.exports = clienteSchema;
