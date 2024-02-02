const joi = require("joi");

const schemaCadastroUsuario = joi.object({
    nome: joi.string().trim().required().messages({
        'any.required': "O campo nome é obrigatório",
        'string.empty': "O campo nome não pode ser vazio."
    }),
    email: joi.string().email().trim().required().messages({
        'any.required': "O campo email é obrigatório",
        'string.empty': "O campo email não pode ser vazio.",
        'string.email': "O campo email precisa ter um tipo válido."
    }),
    senha: joi.string().min(5).required().messages({
        'any.required': "O campo senha é obrigatório",
        'string.empty': "O campo senha não pode ser vazio.",
        'string.min': "A senha precisa conter no mínimo 5 caracteres.",
        'string.base': "O campo senha deve ser uma string válida."
    })
});

const schemaLoginUsuario = joi.object({
    email: joi.string().email().trim().required().messages({
      'any.required': "O campo email é obrigatório",
      'string.empty': "O campo email não pode ser vazio.",
      'string.email': "O campo email precisa ter um tipo válido."
    }),
    senha: joi.string().required().messages({
      'any.required': "O campo senha é obrigatório",
      'string.empty': "O campo senha não pode ser vazio.",
      'string.base': "O campo senha deve ser uma string válida."
    })

});

module.exports = {
  schemaCadastroUsuario,
  schemaLoginUsuario,
};
