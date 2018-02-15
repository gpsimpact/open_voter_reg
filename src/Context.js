import sqlDb from './db';
import RegistrantConnector from './connectors/registrants';
import UserConnector from './connectors/users';
import OrganizationPermissionsConnector from './connectors/organizationPermissions';
import sendEmail from './connectors/email';
import RegistrantModel from './models/registrants';
import UserModel from './models/users';

class MakeContext {
  constructor(request) {
    this.request = request;

    this.connectors = {
      registrant: { ...new RegistrantConnector({ sqlDb }) },
      user: { ...new UserConnector({ sqlDb }) },
      organizationPermissions: { ...new OrganizationPermissionsConnector({ sqlDb }) },
      sendEmail,
    };

    this.models = {
      registrant: { ...new RegistrantModel() },
      user: { ...new UserModel() },
    };
  }

  get user() {
    return this.request.user;
  }

  // ensureIsAuthenticated() {
  //   // https://github.com/kriasoft/nodejs-api-starter/blob/master/src/errors.js
  //   if (!this.user) throw new UnauthorizedError();
  // }
}

export default MakeContext;
