const { Router } = require("express");
const obterAutenticacao = require("../intermediarios/autenticacao");
const cadastrarCliente = require("../controladores/cliente/cadastrarCliente");
const { listarClientesDeUsuario} = require("../controladores/cliente/listarClientesDeUsuario")
const editarCliente = require("../controladores/cliente/editarCliente")

const rotasCliente = Router();

rotasCliente.post("/cliente", obterAutenticacao, cadastrarCliente);
rotasCliente.get("/cliente", obterAutenticacao, listarClientesDeUsuario);
rotasCliente.put("/cliente/:id", obterAutenticacao, editarCliente);

module.exports = rotasCliente;
