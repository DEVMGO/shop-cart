import { combineReducers } from "redux";
import productsReducer from "./products/productsReducer";
import cartReducer from "./cart/cartReducer";

const reducer = combineReducers({
    productsState: productsReducer,
    cartState: cartReducer
})

export default reducer;