import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductreducer, getProductDetailsreducer } from './reducer/productReducer';
import { cartReducer } from './reducer/cartReducer';
const reducer = combineReducers({
    getProducts: getProductreducer,
    getProductDetails: getProductDetailsreducer,
    cart: cartReducer

})

const middleware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;