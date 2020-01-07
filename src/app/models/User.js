// Imports ---------------------------------------------------------------------
import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

// Content ---------------------------------------------------------------------
class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL, // VIRTUAL: nao existira no banco de dados, apenas no codigo
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    // Trecho de codigo a ser executado antes de salvar no banco de dados
    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  // Recebe senha e retorna comparacao da senha recebida com senha registrada na linha deste usuario no database
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

// Exports ---------------------------------------------------------------------
export default User;
