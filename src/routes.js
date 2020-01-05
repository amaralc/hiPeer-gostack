// Importa dependencias
const { Router } = require('express');


// Define rotas
const routes = new Router();


routes.get('/', (req, res)=>{ // Se acessar rota raiz
  return res.json({ message: 'Hello World!'}); // Retorna JSON
})

// Exporta rotas
module.exports = routes;