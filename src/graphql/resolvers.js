import QueryResolver from './Query/Query.resolvers';
import MutationResolver from './Mutation/Mutation.resolvers';

export default {
  ...QueryResolver,
  ...MutationResolver,
};
