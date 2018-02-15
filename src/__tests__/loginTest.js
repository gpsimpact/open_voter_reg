// import { graphql } from 'graphql';
import db from '../db';
// import schema from '../graphql/schema';
// // import faker from 'faker';
// import MakeContext from '../Context';
// import { find } from 'lodash';
// import bcrypt from 'bcrypt';
// import { generateFakeUsers } from '../utils';

beforeAll(async () => await db.migrate.latest({ directory: './src/db/migrations' }));
beforeEach(async () => await Promise.all([db.raw('TRUNCATE TABLE users CASCADE ')]));
afterAll(async () => await db.destroy());

describe('login', () => {
  test('user can login via mutation', () => {
    expect('This test').toBe('done');
  });
  test('user can not log in with incorrect password', () => {
    expect('This test').toBe('done');
  });
});
