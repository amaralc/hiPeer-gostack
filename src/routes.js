// Imports ---------------------------------------------------------------------
import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddlewares from './app/middlewares/auth';

// Content ---------------------------------------------------------------------
const routes = new Router();
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Define middleware global para ser utilizado nas rotas que vierem apos routes.use...
routes.use(authMiddlewares);
routes.put('/users', UserController.update);

// Exports ---------------------------------------------------------------------
export default routes;
