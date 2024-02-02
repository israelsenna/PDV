const express = require("express");
const cors = require("cors");
require("dotenv").config();

const rotas = require("./rotas/rotas");
const rotasCategoria = require("./rotas/categoria-rota");
const rotasProduto = require("./rotas/produto-rota");
const rotasCliente = require("./rotas/cliente-rota");

const app = express();

app.use(express.json());
app.use(cors());

app.use(rotasCategoria);
app.use(rotasProduto);
app.use(rotasCliente);
app.use(rotas);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
