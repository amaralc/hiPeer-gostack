// Imports ---------------------------------------------------------------------
import { Router } from 'express';

import multer from 'multer'; // Biblioteca para multipart form
import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddlewares from './app/middlewares/auth';

// Content ---------------------------------------------------------------------
const routes = new Router();
const upload = multer(multerConfig);
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Define middleware global para ser utilizado nas rotas que vierem apos routes.use...
routes.use(authMiddlewares);
routes.put('/users', UserController.update);
routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: true });
});

// Exports ---------------------------------------------------------------------
export default routes;
