const knex = require("../../database/connection");

const listarProdutos = async (req, res)=> {
  const {categoria_id} = req.query;

  try {
    if(!categoria_id) {
      const listaProdutos = await knex('produtos').orderBy('id', 'asc');
      return res.status(200).json(listaProdutos);
    }

    const categoriaIdExiste = await knex('categorias').where('id', categoria_id).first();

    if(!categoriaIdExiste) {
      return res.status(404).json({mensagem: "Categoria não encontrada."});
    }

    const listaProdutos = await knex("produtos").where("categoria_id", categoria_id);

    return res.status(200).json(listaProdutos);

  }catch(error) {
      return res.status(500).json({mensagem: "Erro interno do servidor."});
  }
}

module.exports = {
  listarProdutos
}