const knex = require("../../database/connection");
const produtoSchema = require("../../validacoes/schemaProduto");

const cadastrarProduto = async (req, res) => {
  const { categoria_id } = req.body;
  const { body } = req;

  try {
    const { error, value } = produtoSchema.validate(body);

    if (error) {
      return res.status(400).json({ mensagem: error.details[0].message });
    }

    const categoriaExiste = await knex("categorias").where("id", categoria_id);

    if (categoriaExiste.length === 0) {
      return res.status(404).send({ mensagem: "Categoria não encontrada!" });
    }

    const produtoCadastrado = await knex("produtos")
      .insert(value)
      .returning("*");

    return res.status(201).json(produtoCadastrado[0]);
  } catch (error) {
    return res.status(500).json({ mensagem: error.message });
  }
};

module.exports = {
  cadastrarProduto,
};
