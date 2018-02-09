export default {
  Mutation: {
    updateRegistrant(root, args, ctx) {
      return ctx.models.registrant.updateRegistrantByHash(args.data, ctx);
    },
  },
};
