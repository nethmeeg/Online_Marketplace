import {
    GET_SHOP,
    GET_SHOPS,
    SHOP_LOADING,
    CLEAR_CURRENT_SHOP
  } from '../actions/types';
  
  const initialState = {
    shop: null,
    shops: null,
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SHOP_LOADING:
        return {
          ...state,
          loading: true
        };
      case GET_SHOP:
        return {
          ...state,
          shop: action.payload,
          loading: false
        };
      case GET_SHOPS:
        return {
          ...state,
          shops: action.payload,
          loading: false
        };
      case CLEAR_CURRENT_SHOP:
        return {
          ...state,
         shop: null
        };
      default:
        return state;
    }
  }