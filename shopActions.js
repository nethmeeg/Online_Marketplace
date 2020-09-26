import axios from 'axios';

import {
  GET_SHOP,
  GET_SHOPS,
  SHOP_LOADING,
  CLEAR_CURRENT_SHOP,
  GET_ERRORS,
  SET_CURRENT_USER
} from './types';

// Get current shop
export const getCurrentShop = () => dispatch => {
  dispatch(setShopLoading());
  axios
    .get('/api/Shop')
    .then(res =>
      dispatch({
        type: GET_SHOP,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_SHOP,
        payload: {}
      })
    );
};

// Get shop by shopName
export const getShopByName = shopName => dispatch => {
  dispatch(setShopLoading());
  axios
    .get(`/api/Shop/shopName/${shopName}`)
    .then(res =>
      dispatch({
        type: GET_SHOP,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_SHOP,
        payload: null
      })
    );
};

// Create Shop
export const createShop = (shopData, history) => dispatch => {
  axios
    .post('/api/Shop', shopData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get all shops
export const getShops = () => dispatch => {
  dispatch(setShopLoading());
  axios
    .get('/api/Shop/all')
    .then(res =>
      dispatch({
        type: GET_SHOPS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_SHOPS,
        payload: null
      })
    );
};

// Delete shop
export const deleteShop = () => dispatch => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    axios
      .delete('/api/Shop')
      .then(res =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {}
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};

// Shop loading
export const setShopLoading = () => {
  return {
    type: SHOP_LOADING
  };
};

// Clear shop
export const clearCurrentShop = () => {
  return {
    type: CLEAR_CURRENT_SHOP
  };
};
