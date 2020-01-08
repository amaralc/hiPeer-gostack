// Imports ---------------------------------------------------------------------
import jwt from 'jsonwebtoken'; // Importa json web token
import { promisify } from 'util'; // Pega funcao de callback e transforma em funcao utilizavel em async await
import authConfig from '../../config/auth'; // Importa informacoes de autorizacao

// Content ---------------------------------------------------------------------

// Exports ---------------------------------------------------------------------
export default async (req, res, next) => {
  // Salva authentication header a partir do header da requisicao
  const authHeader = req.headers.authorization;

  // Se header de autorizacao nao estiver presente
  if (!authHeader) {
    // Retorna erro 401 (nao autorizado)
    return res.status(401).json({ error: 'Token not provided' });
  }

  // Divide header por espacos, desestrutura o array e salva apenas a posicao do token na variavel token
  const [, token] = authHeader.split(' ');

  try {
    // Decodifica e retorna informacoes utilizadas quando o token foi gerado
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    // Salva id do usuario a partir do token decodificado
    req.userId = decoded.id;

    // Rota que estiver utilizando este middleware chama proximo metodo em routes.js
    return next();
  } catch (err) {
    // Se retornar erro, significa que token nao e valido. Retorna status 401.
    return res.status(401).json({ error: 'Invalid token' });
  }
};
