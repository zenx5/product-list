import { createSlice } from "@reduxjs/toolkit";
import ProductService from "../../services/ProductService";

const initialState = {
    isLoading: false,
    error: null,
    product: null,
    products: [],
    createProduct: null
}

const slice = createSlice({
    name:'product',
    initialState,
    reducers:{
        // START LOADING
        startLoading(state) {
            state.isLoading = true
        },

        // HAS ERROR
        hasError(state, action) {
            state.isLoading = false
            state.error = action.payload
        },

         // SET CREATE PRODUCT
        setCreateProduct(state, action) {
            state.createProduct = action.payload
        },

        // GET PRODUCTS
        getProductsSuccess(state, action) {
            state.isLoading = false
            state.products = action.payload
            state.product = null
        },

        // GET PRODUCT
        getProductSuccess(state, action) {
            state.isLoading = false
            state.product = action.payload
            state.products = []
        },
    }

})

export default slice.reducer

export function getProducts(){
    return async (dispatch) => {
        dispatch(slice.actions.startLoading())
        try{
            const response = ProductService.fetch()
            dispatch(slice.actions.getProductsSuccess(response.data))
        }catch( error ) {
            dispatch(slice.actions.hasError(error))
        }
    }
}

export function getProduct(id){
    return async (dispatch) => {
        dispatch(slice.actions.startLoading())
        try{
            const response = ProductService.get(id)
            dispatch(slice.actions.getProductSuccess(response.data))
        }catch( error ) {
            dispatch(slice.actions.hasError(error))
        }
    }
}