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
            const response = await ProductService.fetch()
            console.log(response)
            dispatch(slice.actions.getProductsSuccess(response))
        }catch( error ) {
            dispatch(slice.actions.hasError(error))
        }
    }
}

export function getProduct(id){
    return async (dispatch) => {
        dispatch(slice.actions.startLoading())
        try{
            const response = await ProductService.get(id)
            console.log(response)
            dispatch(slice.actions.getProductSuccess(response))
        }catch( error ) {
            dispatch(slice.actions.hasError(error))
        }
    }
}

export function setProduct(data){
    return async (dispatch) => {
        dispatch(slice.actions.startLoading())
        try{
            if( data.id ) {
                await ProductService.update(data.id, data)
            }else{
                await ProductService.post(data)
            }
            dispatch(getProducts())
            dispatch(slice.actions.setCreateProduct(data))
        }catch( error ) {
            dispatch(slice.actions.hasError(error))
        }
    }
}

export function deleteProduct(id){
    return async (dispatch) => {
        dispatch(slice.actions.startLoading())
        try{
            const response = await ProductService.delete(id)
            dispatch(getProducts())
            dispatch(slice.actions.setCreateProduct(response))
        }catch( error ) {
            dispatch(slice.actions.hasError(error))
        }
    }
}