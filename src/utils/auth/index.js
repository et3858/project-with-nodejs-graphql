const passport = require('passport');

const GQLLocalStrategy = require('./strategies/local-gql.strategy');
const LocalStrategy = require('./strategies/local.strategy');
const JwtStrategy = require('./strategies/jwt.strategy');

passport.use(GQLLocalStrategy);
passport.use(LocalStrategy);
passport.use(JwtStrategy);
