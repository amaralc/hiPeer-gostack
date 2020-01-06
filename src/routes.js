// Imports ---------------------------------------------------------------------
import { Router } from 'express';
import User from './app/models/User';

// Content ---------------------------------------------------------------------
const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Teste',
    email: 'diego@rocketseat.com.br',
    password_hash: '123456789',
  });
  res.json(user); // Responde requisicao com user em formato json
});

// Exports ---------------------------------------------------------------------
export default routes;
