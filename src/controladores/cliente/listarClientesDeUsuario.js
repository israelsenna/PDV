const knex = require("../../database/connection");

const listarClientesDeUsuario = async (req, res) => {
  try {
    const clientes = await knex("clientes");

    if (!clientes) {
      return res.status(404).json({ mensagem: "Clientes não encontrados" });
    }

    return res.status(200).json(clientes);
  } catch (error) {
    return res.status(400).json({ mensagem: error.message });
  }
};

module.exports = {
  listarClientesDeUsuario,
};
