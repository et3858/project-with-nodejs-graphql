const { RegularExpression } = require('graphql-scalars');
const {
    login,
} = require('./auth.resolvers');
const {
    addCategory,
    getCategory,
} = require('./category.resolvers');
const {
    getProducts,
    addProduct,
    getProduct,
    updateProduct,
    deleteProduct,
} = require('./product.resolvers')


const CategoryNameType = new RegularExpression('CategoryNameType', /^[a-zA-Z0-9]{3,8}$/)


const resolvers = {
    Query: {
        // Categories
        category: getCategory,

        // Products
        products: getProducts,
        product: getProduct,
    },
    Mutation: {
        // Auth
        login,

        // Categories
        addCategory,

        // Products
        addProduct,
        updateProduct,
        deleteProduct,
    },
    CategoryNameType,
};


module.exports = resolvers;
