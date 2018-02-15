import { createError } from 'apollo-errors';

export const RecordLockedError = createError('RecordLockedError', {
  message: 'This record has been locked and can not be updated.',
});

export const DuplicateRegistrationError = createError('DuplicateRegistrationError', {
  message: 'This email address is already associated with an account.',
});
