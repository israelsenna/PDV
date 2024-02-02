const knex = require("../database/connection");
const jwt = require("jsonwebtoken");

const obterAutenticacao = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Não autorizado." });
  }

  try {
    const token = authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Não autorizado." });
    }

    const tokenUsuario = jwt.verify(token, process.env.SENHA_JWT);

    const { id } = tokenUsuario;

    const usuario = await knex("usuarios").where("id", id);

    if (usuario.length < 1) {
      return res.status(404).json({ mensagem: "Usuario não encontrado." });
    }

    req.usuario = usuario[0];

    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ mensagem: "Token inválido" });
    }
    return res.status(500).json({ mensagem: "Erro interno do servidor." });
  }
};

module.exports = obterAutenticacao;
