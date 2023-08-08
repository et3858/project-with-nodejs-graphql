const AuthService = require('./../services/auth.service');
const service = new AuthService();


const login = async (_, args, context) => {
    const { email, password } = args;
    const { user } = await context.authenticate('graphql-local', { email, password });

    return service.signToken(user);
};


module.exports = {
    login,
};
