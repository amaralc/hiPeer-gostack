// Imports
import { Router } from 'express';

// Content
const routes = new Router();

routes.get('/', (req, res)=>{ // Se acessar rota raiz
  return res.json({ message: 'Hello World!'}); // Retorna JSON
})

// Exports
export default routes;