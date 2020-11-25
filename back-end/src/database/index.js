import knex from 'knex';
import configDatabase from '../../knexfile';

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = knex(configDatabase.development);
  }
}

export default new Database().connection;
