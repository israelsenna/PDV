const { Router } = require("express");
const {
  cadastrarProduto,
} = require("../controladores/produto/cadastrarProduto");
const obterAutenticacao = require("../intermediarios/autenticacao");
const { editarProduto } = require("../controladores/produto/editarProduto");
const { listarProdutos } = require("../controladores/produto/listarProduto");
const { listarProdutoPorId } = require("../controladores/produto/listarProdutoPorId");
const { excluirProduto } = require("../controladores/produto/excluirProduto");

const rotasProduto = Router();

rotasProduto.post("/produto", obterAutenticacao, cadastrarProduto);

rotasProduto.put("/produto/:id", obterAutenticacao, editarProduto);

rotasProduto.get("/produto", obterAutenticacao, listarProdutos);

rotasProduto.get("/produto/:id", obterAutenticacao, listarProdutoPorId);

rotasProduto.delete("/produto/:id", obterAutenticacao,excluirProduto);
module.exports = rotasProduto;
