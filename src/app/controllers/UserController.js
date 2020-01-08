// Imports ---------------------------------------------------------------------
import User from '../models/User';

// Content ---------------------------------------------------------------------
class UserController {
  async store(req, res) {
    // Verifica existencia de usuario antes de cadastrar
    const userExists = await User.findOne({ where: { email: req.body.email } });

    // Se usuario existir, retorna erro (bad request)
    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    // Cria usuario a partir do corpo da requisicao
    const { id, name, email, provider } = await User.create(req.body);
    return res.json({
      id,
      name,
      email,
      provider,
    });
  }

  // Permite que usuario faca alteracao de seus dados cadastrais
  // Rota nao pode ser acessivel a usuarios que nao estejam logados
  async update(req, res) {
    // Salva email e antigo password
    const { email, oldPassword } = req.body;

    // Busca usuario no banco de dados a partir da primary key (pk)
    const user = await User.findByPk(req.userId);

    // Se usuario estiver mudando de e-mail
    if (email !== user.email) {
      // Verifica existencia de usuario antes de cadastrar
      const userExists = await User.findOne({
        where: { email },
      });

      // Se usuario existir, retorna erro (bad request)
      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    // Retorna erro caso antigo password nao combine com o informado E usuario estiver tentando alterar senha
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    // Atualiza usuario
    const { id, name, provider } = await user.update(req.body);

    // Retorna objeto json para cliente
    return res.json({
      id,
      name,
      email,
      provider,
    });
  }
}

// Exports ---------------------------------------------------------------------
export default new UserController();
