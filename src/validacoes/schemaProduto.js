const Joi = require("joi");

const produtoSchema = Joi.object({
  descricao: Joi.string().max(455).required().messages({
    "string.base": "A descrição deve ser uma string",
    "string.empty": "A descrição não pode estar vazia",
    "string.max": "A descrição não pode ter mais de 455 caracteres",
    "any.required": "A descrição é obrigatória",
  }),
  quantidade_estoque: Joi.number().integer().positive().required().messages({
    "number.base": "A quantidade de estoque deve ser um número",
    "number.integer": "A quantidade de estoque deve ser um número inteiro",
    "number.positive": "A quantidade de estoque deve ser um número positivo",
    "any.required": "A quantidade de estoque é obrigatória",
  }),
  valor: Joi.number().integer().positive().required().messages({
    "number.base": "O valor deve ser um número",
    "number.integer": "O valor deve ser um número inteiro",
    "number.positive": "O valor deve ser um número positivo",
    "any.required": "O valor é obrigatório",
  }),
  categoria_id: Joi.number().integer().positive().required().messages({
    "number.base": "O ID da categoria deve ser um número",
    "number.integer": "O ID da categoria deve ser um número inteiro",
    "number.positive": "O ID da categoria deve ser um número positivo",
    "any.required": "O ID da categoria é obrigatório",
  }),
});

module.exports = produtoSchema;
