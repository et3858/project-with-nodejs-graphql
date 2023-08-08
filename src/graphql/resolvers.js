const {
    login,
} = require('./auth.resolvers');
const {
    getProducts,
    addProduct,
    getProduct,
    updateProduct,
    deleteProduct,
} = require('./product.resolvers')


const resolvers = {
    Query: {
        // Products
        products: getProducts,
        product: getProduct,
    },
    Mutation: {
        // Auth
        login,

        // Products
        addProduct,
        updateProduct,
        deleteProduct,
    },
};


module.exports = resolvers;
