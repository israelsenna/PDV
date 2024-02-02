const knex = require("../../database/connection");
const clienteSchema = require("../../validacoes/schemaCliente");

const cadastrarCliente = async (req, res) => {
  const { email, cpf } = req.body;
  const { error, value } = clienteSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ mensagem: error.details[0].message });
  }

  try {
    const clienteExiste = await knex("clientes")
      .where({ email })
      .orWhere({ cpf });
    if (clienteExiste.length > 0) {
      return res
        .status(400)
        .json({ mensagem: "Cliente já cadastrado com este email ou CPF!" });
    }

    await knex("clientes").insert(value).returning("*");

    return res.status(201).send();
  } catch (error) {
    return res.status(500).json({ mensagem: error.message });
  }
};

module.exports = cadastrarCliente;
