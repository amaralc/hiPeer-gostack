/* Descricao: configuracao de upload de arquivos */

// Imports ---------------------------------------------------------------------
import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

// Content ---------------------------------------------------------------------

// Exports ---------------------------------------------------------------------
export default {
  // Define como multer ira guardar arquivos de imagem (ex.: CDN, ou app files)
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        // Retorna calback com erro caso algum erro aconteca
        if (err) return cb(err);

        // Se nao deu erro retorna valor em hexadecimal seguido da extensao do arquivo
        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
