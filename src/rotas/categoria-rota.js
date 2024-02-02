const { Router } = require("express");
const {
  listarCategorias,
} = require("../controladores/categorias/listarCategorias");

const rotasCategoria = Router();

rotasCategoria.get("/categoria", listarCategorias);

module.exports = rotasCategoria;
