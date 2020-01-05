// Imports ---------------------------------------------------------------------
import { Router } from 'express';

// Content ---------------------------------------------------------------------
const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Hello World!' }));

// Exports ---------------------------------------------------------------------
export default routes;
