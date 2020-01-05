// Imports
const express = require('express');
const routes = require('./routes');

// Contents
class App { // Define class App
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
module.exports = new App().server;