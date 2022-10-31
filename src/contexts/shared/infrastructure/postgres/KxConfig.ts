import Knex from 'knex';

const knex = Knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 5434,
    user: 'pf',
    password: 'pf',
    database: 'firepot',
  },
});

export default knex;
