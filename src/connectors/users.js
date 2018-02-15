import DataLoader from 'dataloader';
import { mapTo } from '../utils';

class UserConnector {
  constructor({ sqlDb }) {
    this.sqlDb = sqlDb;
  }

  userByEmail = new DataLoader(keys =>
    this.sqlDb
      .table('users')
      .whereIn('email', keys)
      .select()
      .then(mapTo(keys, x => x.email))
  );

  createNewUser = data =>
    this.sqlDb
      .table('users')
      .insert(data)
      .returning('*');
}

export default UserConnector;
