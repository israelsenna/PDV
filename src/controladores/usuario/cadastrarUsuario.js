const knex = require('../../database/connection');
const bcrypt = require('bcrypt');

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        const usuarioExiste = await knex('usuarios').where("email", email)

        if (usuarioExiste.length > 0) {
            return res.status(400).json({ mensagem: "Email já existe." })
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const usuarioCadastrado = await knex('usuarios').insert({
            nome,
            email,
            senha: senhaCriptografada
        }).returning(['id', 'nome', 'email']);

        return res.status(201).json(usuarioCadastrado[0]);

    } catch (error) {
        console.log(error)
        return res.status(400).json({ mensagem: error.message })
    }
}

module.exports = {
    cadastrarUsuario
}