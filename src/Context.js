import sqlDb from './db';
import RegistrantConnector from './connectors/registrants';
import RegistrantModel from './models/registrants';

class MakeContext {
  constructor(request) {
    this.request = request;

    this.connectors = {
      registrant: { ...new RegistrantConnector({ sqlDb }) },
    };

    this.models = {
      registrant: { ...new RegistrantModel() },
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
