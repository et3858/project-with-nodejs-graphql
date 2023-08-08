const checkJwtGql = require('./../utils/checkJwtGql');
const checkRolesGql = require('./../utils/checkRolesGql');
const CategoryService = require('./../services/category.service');
const service = new CategoryService();


const addCategory = async (_, args, context) => {
    const user = await checkJwtGql(context);
    checkRolesGql(user, 'admin');

    const { dto } = args;

    return service.create({
        ...dto,
        image: dto.image.href,
    });
};


const getCategory = async (_, args) => {
    return service.findOne(args.id);
};


module.exports = {
    addCategory,
    getCategory,
};
