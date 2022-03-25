import axios from "axios";
import { GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL, GET_PRODUCTDetails_SUCCESS, GET_PRODUCTDetails_FAIL } from "../constants/productConstant";

const url = "";
export const getProducts = () => async(dispatch) => {
    try {
        const { data } = await axios.get(`/products`);
        dispatch({ type: GET_PRODUCT_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: GET_PRODUCT_FAIL, payload: error.response })
    }
};

export const getProductDetails = (id) => async(dispatch) => {
    try {

        const { data } = await axios.get(`/product/${id}`);
        console.log(data);
        dispatch({ type: GET_PRODUCTDetails_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: GET_PRODUCTDetails_FAIL, payload: error.response });


    }
};