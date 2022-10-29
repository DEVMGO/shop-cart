import axios from "axios"

const fetchProductsRequest = () => {
    return {type: "FETCH_PRODUTS_REQUEST"}
}

const fetchProductsSuccess = (products) => {
    return {type: "FETCH_PRODUTS_SUCCESS", payload: products}
}

const fetchProductsFailure = (error) => {
    return {type: "FETCH_PRODUTS_FAILURE", payload: error}
}

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsRequest())
        axios.get("https://fakestoreapi.com/products")
        .then(res => {
            dispatch(fetchProductsSuccess(res.data))
        })
        .catch(error => {
            dispatch(fetchProductsFailure(error.message))
        })
    }
}