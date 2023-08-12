import { useEffect, useReducer } from 'react'

// dataReducer.js
export const initialState = { products: [], allProducts: [] };
  

export function reducer(state, action) { // passed by default by dispatch, action needed to send , 

    switch (action.type) {
        case 'set_both_products':
            return {...state, products: action.payload, allProducts: action.payload }
            // break;
        case 'set_products':
            return {...state, products: action.payload }            
            // break;
        case 'set_allProducts':
            return {...state, allProducts: action.payload }
            // break;
        default:
            return state
    }
}


export const DataManager = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return {
        state, dispatch
    }
}
