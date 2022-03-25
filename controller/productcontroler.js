import Product from '../model/ProductSchema.js'

export const getProducts = async(req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.log("Error", error.message);
    }
}

export const getProductById = async(request, response) => {
    try {
        const product = await Product.findOne({ 'id': request.params.id });
        response.json(product);
    } catch (error) {
        console.log("Error", error.message);
    }
}