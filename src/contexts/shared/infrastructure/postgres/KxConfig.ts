import Knex from 'knex';

const knex = Knex({
  client: 'pg',
  version: '14',
  connection: {
    host: 'postgres',
    port: 5432,
    user: 'pf',
    password: 'pf',
    database: 'firepot',
  },
});

export default knex;
