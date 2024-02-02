const knex = require("../../database/connection");
const bcrypt = require("bcrypt");

const editarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;
  const { id } = req.usuario;

  try {
    const usuarioExiste = await knex("usuarios").where({ email }).first();

    if (usuarioExiste && usuarioExiste.id !== id) {
      return res.status(400).json({ mensagem: "Email já existe!" });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const atualizacaoUsuario = {
      nome,
      email,
      senha: senhaCriptografada,
    };

    await knex("usuarios").update(atualizacaoUsuario).where({ id });

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ mensagem: error.message });
  }
};

module.exports = {
  editarUsuario,
};
