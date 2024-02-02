const knex = require("../../database/connection");
const produtoSchema = require("../../validacoes/schemaProduto");

const editarProduto = async (req, res) => {
  const { categoria_id } = req.body;
  const { body } = req;
  const id_produto = req.params.id;

  try {
    const { error, value } = produtoSchema.validate(body);

    if (error) {
      return res.status(400).json({ mensagem: error.details[0].message });
    }

    const produtoExiste = await knex("produtos").where("id", id_produto);

    if (produtoExiste.length === 0) {
      return res.status(404).send({ mensagem: "Produto não encontrado!" });
    }

    const categoriaExiste = await knex("categorias").where("id", categoria_id);

    if (categoriaExiste.length === 0) {
      return res.status(404).send({ mensagem: "Categoria não encontrada!" });
    }

    const produtoEditado = await knex("produtos")
      .where({ id: id_produto })
      .update(value)
      .returning("*");

    return res.status(200).json(produtoEditado[0]);
  } catch (error) {
    return res.status(500).json({ mensagem: error.message });
  }
};

module.exports = {
  editarProduto,
};
