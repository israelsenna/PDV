const knex = require("../../database/connection");

const listarProdutoPorId = async (req, res) => {
  const {id} = req.params;

  try {
    const idProdutoExiste = await knex("produtos").where("id", id).first();

    if(!idProdutoExiste) {
        return res.status(404).json({mensagem: "Produto não encontrado."})
    }

      return res.send(idProdutoExiste) 

  }catch(error) {
      return res.status(500).json({mensagem: "Erro interno do servidor."})
  }
}

module.exports = {
  listarProdutoPorId
}