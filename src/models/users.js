import bcrypt from 'bcrypt';
import { DuplicateRegistrationError } from '../errors';

class UserModel {
  register = async ({ email, password, first_name, last_name }, ctx) => {
    // search db for matching emails
    const prevUser = await ctx.connectors.user.userByEmail.load(email); //dataLoaders.users.byEmail.load(email);
    if (prevUser) {
      throw new DuplicateRegistrationError({ data: { email } });
    }

    const hash = bcrypt.hashSync(password, 10);
    const newUser = await ctx.connectors.user.createNewUser({
      email,
      password,
      first_name,
      last_name,
      password: hash,
    });

    return await ctx.connectors.user.userByEmail
      .clear(email)
      .prime(email, newUser[0])
      .load(email);
  };
}

export default UserModel;
