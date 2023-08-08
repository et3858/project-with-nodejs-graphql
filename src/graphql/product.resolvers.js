const ProductsService = require('./../services/product.service');
const service = new ProductsService();


const getProducts = async (_, args) => {
    return service.find({});
};


const addProduct = async (_, args) => {
    return service.create(args.dto);
};


const getProduct = async (_, args) => {
    return service.findOne(args.id);
};


const updateProduct = async (_, args) => {
    return service.update(args.id, args.dto);
};


const deleteProduct = async (_, args) => {
    await service.delete(args.id);
    return args.id;
};


const getProductsByCategory = async (parent) => {
    const id = parent.dataValues.id;

    return service.getByCategory(id);
};


module.exports = {
    getProducts,
    addProduct,
    getProduct,
    updateProduct,
    deleteProduct,

    getProductsByCategory,
};
