// Imports
import express from 'express';
import routes from './routes';

// Contents
class App { // Define classe App
  constructor(){
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    // Habilita applicacao a receber requisicoes em formato JSON
    this.server.use(express.json());
  }

  routes(){ //
    this.server.use(routes);
  }
}

// Exports
export default new App().server;