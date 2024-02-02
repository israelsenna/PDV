const obterPerfilUsuario = (req, res) => {
  const { senha: _, ...perfilUsuario } = req.usuario;

  return res.status(200).json(perfilUsuario);
};

module.exports = {
  obterPerfilUsuario,
};
