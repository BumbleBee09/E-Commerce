const Category = require("../models/category_model");
const Product = require("../models/product_model");

const createProduct = async(reqData) => {
    let topLevel = await Category.findOne({name: reqData.topLevelCategory});

    if(!topLevel){
        topLevel = new Category({
            name: reqData.topLevelCategory,
            level: 1
        })
    }

    let secondLevel = await Category.findOne({
        name: reqData.secondLevelCategory,
        parentCategory: topLevel._id,
    })

    if(!secondLevel){
        secondLevel = new Category({
            name : reqData.secondLevelCategory,
            parentCategory: topLevel._id,
            level: 2
        })
    }

    let thirdLevel = await Category.findOne({
        name: reqData.thirdLevelCategory,
        parentCategory: secondLevel._id,
    })

    if(!thirdLevel){
        thirdLevel = new Category({
            name:reqData.thirdLevelCategory,
            parentCategory:secondLevel._id,
            level: 3,
        })
    }

    const product = new Product({
        title:reqData.title,
        color:reqData.color,
        description:reqData.description,
        discountedPrice:reqData.discountedPrice,
        discountPercent:reqData.discountPercent,
        imageUrl:reqData.imageUrl,
        brand:reqData.brand,
        price:reqData.price,
        sizes:reqData.size,
        quantity:reqData.quantity,
        category:thirdLevel._id,
    })

    return await product.save();
}

const findProductById = async(productId) => {
    const product = await Product.findById(productId).populate("category").exec();

    if(!product){
        throw new Error("Product not found with id " + productId);
    }

    return product;
}

const deleteProduct = async(productId) => {

    const product = await findProductById(productId);

    await Product.findByIdAndDelete(productId);
    // await Product.findByIdAndDelete(product._id);
    return "Product Deleted Successfully";
}

const updateProduct = async(productId, reqData) => {
    return await Product.findByIdAndUpdate(productId, reqData);
}

// const getAllProduct = async(reqQuery) => {
//     let {category, color, sizes, minPrice, maxPrice, minDiscount, sor, stock, pageNumber, pageSize} = reqQuery;

//     pageSize = pageSize || 10;

//     let query = Product.find().populate("category");

//     if(category){
//         const existCategory = await Category.findOne({name: category});

//         if()
//     }
// }