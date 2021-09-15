import { ADD_TO_CART, CHANGE_SEARCH_FIELD } from "./constant"

const initialState = {
    searchField: "",
    products:[],
    cart:[
        {
            product:{},
            quantity:1
        }
    ]
}



export const Ecom = (state = initialState, action = {}) => {
    
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
           
            return {...state, searchField: action.payload};
            
        case ADD_TO_CART:
            var cart = state.cart;
            var obj ={}
            obj['quantity']=1
            obj['product']=action.payload
            cart.push(obj)
            return {...state, cart:cart}
            
        default:
            return state;
    }
}

