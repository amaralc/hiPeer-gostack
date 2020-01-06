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
}

// Exports ---------------------------------------------------------------------
export default new UserController();
