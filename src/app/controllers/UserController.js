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
    console.log(req.userId);

    // Retorna objeto json para cliente
    return res.json({ ok: true });
  }
}

// Exports ---------------------------------------------------------------------
export default new UserController();
