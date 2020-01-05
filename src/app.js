// Imports ---------------------------------------------------------------------
import express from 'express';
import routes from './routes';

// Content ---------------------------------------------------------------------
// Define classe App
class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Habilita applicacao a receber requisicoes em formato JSON
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

// Exports ---------------------------------------------------------------------
export default new App().server;
