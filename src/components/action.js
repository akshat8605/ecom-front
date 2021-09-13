import {ADD_TO_CART, CHANGE_SEARCH_FIELD} from './constant'

export const setSearchField = (text) => {
    return {
    type:CHANGE_SEARCH_FIELD,
    payload:text
}}

export const addToCart = (product) =>{
    return{
        type:ADD_TO_CART,
        payload:product
    }
}