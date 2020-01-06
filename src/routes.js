// Imports ---------------------------------------------------------------------
import { Router } from 'express';
import UserController from './app/controllers/UserController';

// Content ---------------------------------------------------------------------
const routes = new Router();
routes.post('/users', UserController.store);

// Exports ---------------------------------------------------------------------
export default routes;
