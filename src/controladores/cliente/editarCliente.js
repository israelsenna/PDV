const knex = require("../../database/connection");
const clienteSchema = require("../../validacoes/schemaCliente");

const editarCliente = async (req, res) => {
  const { nome, email, cpf } = req.body;

  try {
    const { error, value } = clienteSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ mensagem: error.details[0].message });
    }

    const clienteExiste = await knex("clientes").where("id", req.params.id);

    if (clienteExiste.length === 0) {
      return res.status(404).send({ mensagem: "Cliente não encontrado!" });
    }

    const emailExiste = await knex("clientes").where("email", email);

    if (emailExiste.length > 0) {
      return res.status(404).send({ mensagem: "Email já existente!" });
    }

    const cpfExiste = await knex("clientes").where("cpf", cpf);

    if (cpfExiste.length > 0) {
      return res.status(404).send({ mensagem: "Cpf já existente!" });
    }

    const clienteEditado = await knex("clientes")
      .where({ id: req.params.id })
      .update(value)
      .returning("*");

    return res.status(200).json(clienteEditado[0]);
  } catch (error) {
    return res.status(500).json({ mensagem: error.message });
  }
};

module.exports = editarCliente;
