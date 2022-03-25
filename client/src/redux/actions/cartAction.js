import axios from 'axios';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/cartConstant';
const url = "";

export const AddtoCart = (id) => async(dispatch) => {
    try {
        const { data } = await axios.get(`/product/${id}`);
        dispatch({ type: ADD_TO_CART, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const removeFromItem = (id) => async(dispatch) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
}