const knex = require('../../database/connection');


const listarCategorias = async (req, res) => {
    try {
        const categorias = await knex('categorias');
       
        if (!categorias) {
            return res.status(404).json({mensagem: 'Categorias não encontradas'});
        }

        return res.status(200).json(categorias);

    } catch (error) {
        console.log(error)
        return res.status(400).json({ mensagem: error.message })
    }
}

module.exports = {
    listarCategorias
}

