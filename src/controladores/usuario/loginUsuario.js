const knex = require("../../database/connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUsuario = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await knex("usuarios").where("email", email);

    if (usuario.length < 1) {
      return res.status(404).json({ mensagem: "Usuario não encontrado " });
    }

    const senhaValida = await bcrypt.compare(senha, usuario[0].senha);

    if (usuario[0].email !== email) {
      return res.status(400).json({ mensagem: "Email ou senha invalida" });
    }

    if (!senhaValida) {
      return res.status(400).json({ mensagem: "Email ou senha invalida" });
    }

    const token = jwt.sign({ id: usuario[0].id }, process.env.SENHA_JWT, {
      expiresIn: "5h",
    });

    const { senha: _, ...usuarioLogado } = usuario[0];

    return res.json({ usuario: usuarioLogado, token });
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

module.exports = {
  loginUsuario,
};
