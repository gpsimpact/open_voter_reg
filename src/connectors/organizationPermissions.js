import DataLoader from 'dataloader';
import { mapToMany } from '../utils';

class OrganizationPermissionsConnector {
  constructor({ sqlDb }) {
    this.sqlDb = sqlDb;
  }

  permissionsByEmail = new DataLoader(keys =>
    this.sqlDb
      .table('permissions')
      .whereIn('email', keys)
      .select()
      .then(mapToMany(keys, x => x.email))
  );
}

export default OrganizationPermissionsConnector;
