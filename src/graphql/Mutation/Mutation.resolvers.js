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
    changePassword(root, args, ctx) {
      return ctx.models.user.changePassword(args.data, ctx);
    },
    sendVerificationEmail(root, args, ctx) {
      return ctx.models.user.sendVerificationEmail(args, ctx);
    },
    verifyEmailAddress(root, args, ctx) {
      return ctx.models.user.verifyEmailToken(args, ctx);
    },
    sendPasswordResetEmail(root, args, ctx) {
      return ctx.models.user.sendPasswordResetEmail(args, ctx);
    },
    resetPassword(root, args, ctx) {
      return ctx.models.user.resetPassword(args.data, ctx);
    },
    updateProfile(root, args, ctx) {
      return ctx.models.user.updateProfile(args.data, ctx);
    },
    addOrganizationPermission(root, args, ctx) {
      return ctx.models.organizationPermissions.addOrganizationPermission(args, ctx);
    },
    removeOrganizationPermission(root, args, ctx) {
      return ctx.models.organizationPermissions.removeOrganizationPermission(args, ctx);
    },
  },
};
