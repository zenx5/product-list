import { createStore, combineReducers } from 'redux'
import productReducer from './slices/product'
//Store
const reducers = combineReducers({
    product: productReducer,
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)