/* Description: Arquivo de controle de sessao de usuario */

// Imports ---------------------------------------------------------------------
import jwt from 'jsonwebtoken'; // Iporta json web token dependency
import User from '../models/User'; // Importa User model
import authConfig from '../../config/auth'; // Importa arquivo de autenticacao do token

// Content ---------------------------------------------------------------------
class SessionController {
  async store(req, res) {
    // Salva email e senha que vem do corpo da requisicao
    const { email, password } = req.body;

    // Verifica se existe usuario com o email enviado na requisicao registrado no database
    const user = await User.findOne({ where: { email } });

    // Caso nao encontre usuario, retorne erro 401 (bad request)
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    // Caso hash da senha enviada nao combine com hash do usuario respectivo, retorne erro 401
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    // Pega id e nome do usuario (email ja temos)
    const { id, name } = user;

    // Retorna em formato json...
    return res.json({
      // ... os dados do usuario...
      user: {
        id,
        name,
        email,
      },
      // ... e o token de validacao do acesso com (1) id no payload {id}...
      // ... (2) um hash aleatorio gerado no MD5online...
      // ... e (3) um objeto com configuracoes e expiracao ('7d')
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

// Exports ---------------------------------------------------------------------
export default new SessionController();
