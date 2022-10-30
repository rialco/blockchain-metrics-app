import Knex from 'knex';

const knex = Knex({
  client: 'pg',
  version: '7.2',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'pf',
    password: 'pf',
    database: 'firepot',
  },
});

export default knex;
