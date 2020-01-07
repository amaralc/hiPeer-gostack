// Imports ---------------------------------------------------------------------
import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

// Content ---------------------------------------------------------------------
const routes = new Router();
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Exports ---------------------------------------------------------------------
export default routes;
