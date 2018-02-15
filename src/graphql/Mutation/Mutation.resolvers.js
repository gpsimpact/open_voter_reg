export default {
  Mutation: {
    updateRegistrant(root, args, ctx) {
      return ctx.models.registrant.updateRegistrantByHash(args.data, ctx);
    },
    registerUser(root, args, ctx) {
      return ctx.models.user.register(args.user, ctx);
    },
    login(root, args, ctx) {
      return ctx.models.user.login(args, ctx);
    },
  },
};
