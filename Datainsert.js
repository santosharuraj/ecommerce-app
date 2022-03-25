import { products } from './constants/product.js'
import Product from './model/ProductSchema.js'

const DataInsertintoDB = async() => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);
        // console.log("Data Inserted Successfuly");
    } catch (error) {
        console.log("Error", error.message);
    }
}

export default DataInsertintoDB;