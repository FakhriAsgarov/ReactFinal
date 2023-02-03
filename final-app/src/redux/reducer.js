import * as actionTypes from './actionTypes'
import initialStates from './initialStates'
const reducer=(state=initialStates,action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            let item=state.cart.find(product=>{
               return product.id===action.payload.id; 
            })
            if(item){
                return state;
            }
            else{
                
                return {...state,
                cart:[...state.cart,action.payload]}
            }
            
    }
}

export default reducer;