const { Router } = require("express");

const {
  cadastrarUsuario,
} = require("../controladores/usuario/cadastrarUsuario");

const { loginUsuario } = require("../controladores/usuario/loginUsuario");
const {
  obterPerfilUsuario,
} = require("../controladores/usuario/obterPerfilUsuario");

const validarCorpoRequisicao = require("../intermediarios/validarCorpoRequisicao");
const {
  schemaCadastroUsuario,
  schemaLoginUsuario,
} = require("../validacoes/schemaUsuarios");
const obterAutenticacao = require("../intermediarios/autenticacao");

const { editarUsuario } = require("../controladores/usuario/editarUsuario");

const rotas = Router();

rotas.post(
  "/usuario",
  validarCorpoRequisicao(schemaCadastroUsuario),
  cadastrarUsuario,
);
rotas.post("/login", validarCorpoRequisicao(schemaLoginUsuario), loginUsuario);

rotas.use(obterAutenticacao);

rotas.get("/usuario", obterPerfilUsuario);

rotas.put(
  "/usuario",
  validarCorpoRequisicao(schemaCadastroUsuario),
  editarUsuario,
);

module.exports = rotas;
