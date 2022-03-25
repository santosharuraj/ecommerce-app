import { GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL, GET_PRODUCTDetails_SUCCESS, GET_PRODUCTDetails_FAIL } from "../constants/productConstant";

export const getProductreducer = (state = { products: [] }, action) => {

    switch (action.type) {
        case GET_PRODUCT_SUCCESS:
            return { products: action.payload };

        case GET_PRODUCT_FAIL:
            return { error: action.payload };

        default:
            return state;
    }
};

export const getProductDetailsreducer = (state = { product: {} }, action) => {

    switch (action.type) {
        case GET_PRODUCTDetails_SUCCESS:
            return { product: action.payload };
        case GET_PRODUCTDetails_FAIL:
            return { error: action.payload };
        default:
            return state;
    }
};