// Imports ---------------------------------------------------------------------
import Sequelize from 'sequelize';
import User from '../app/models/User';
import databaseConfig from '../config/database'; // Importa objeto definido no arquivo

// Content ---------------------------------------------------------------------
const models = [User]; // Array com models da aplicacao

class Database {
  constructor() {
    // Chama metodo init
    this.init();
  }

  init() {
    // Faz conexao com a base de dados
    this.connection = new Sequelize(databaseConfig);
    // Carrega models
    models.map(model => model.init(this.connection));
  }
}

// Exports ---------------------------------------------------------------------
export default new Database();
