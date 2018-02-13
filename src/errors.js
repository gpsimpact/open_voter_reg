import { createError } from 'apollo-errors';

export const RecordLockedError = createError('RecordLockedError', {
  message: 'This record has been locked and can not be updated.',
});
