module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'hipeers',
  define: {
    timestamps: true,
    underscored: true, // tabelas com formato_underscore
    underscoredAll: true, // colunas e relacionamentos com formato_underscore
  },
};
