const knex = require("../../database/connection");

const excluirProduto = async (req, res)=> {
  const { id } = req.params;

  try {
    const produtoExcluido = await knex("produtos").del().where("id", id);
    
    if(produtoExcluido < 1) {
        return res.status(404).json({mensagem: "Produto não encontrado."});
    }

    return res.status(204).send();

  }catch(error) {
      return res.status(500).json({mensagem: "Erro interno do servidor."});
  }
}

module.exports = {
  excluirProduto
}