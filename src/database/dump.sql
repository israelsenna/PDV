DROP DATABASE PDV;

CREATE DATABASE PDV;

create table usuarios(
    id serial primary key,
    nome text not null,
    email text unique not null,
    senha text not null
);

create table categorias(
    id serial primary key,
    descricao text not null
);

insert into categorias (descricao) values
('Informática'), 
('Beleza e Perfumaria'), 
('Mercado'), 
('Livros e Papelaria'), 
('Brinquedos'), 
('Moda'), 
('Bebê'), 
('Games');


CREATE TABLE IF NOT EXISTS produtos(
	id SERIAL PRIMARY KEY,
  descricao VARCHAR(455),
  quantidade_estoque INT NOT NULL,
  valor INT NOT NULL,
  categoria_id INT REFERENCES categorias(id)
);

CREATE TABLE IF NOT EXISTS clientes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(70) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  cpf VARCHAR(11) NOT NULL UNIQUE,
  cep VARCHAR(8),
  rua VARCHAR(80),
  numero VARCHAR(20),
  bairro VARCHAR(80),
  cidade VARCHAR(50),
  estado VARCHAR(50)
);