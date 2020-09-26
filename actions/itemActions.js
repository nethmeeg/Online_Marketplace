import axios from 'axios';

import {
  GET_ITEM,
  GET_ITEMS,
  ITEM_LOADING,
  CLEAR_CURRENT_ITEM,
  GET_ERRORS,
  SET_CURRENT_USER
} from './types';

// Get current item
export const getCurrentItem = () => dispatch => {
  dispatch(setItemLoading());
  axios
    .get('/api/Item')
    .then(res =>
      dispatch({
        type: GET_ITEM,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ITEM,
        payload: {}
      })
    );
};

// Get item by item name
export const getItemByName = itemName => dispatch => {
  dispatch(setItemLoading());
  axios
    .get(`/api/Item/itemName/${itemName}`)
    .then(res =>
      dispatch({
        type: GET_ITEM,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ITEM,
        payload: null
      })
    );
};

// Add Item
export const addItem = (itemData, history) => dispatch => {
  axios
    .post('/api/Item', itemData)
    .then(res => history.push('/items'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get all items
export const getItems = () => dispatch => {
  dispatch(setItemLoading());
  axios
    .get('/api/Item/all')
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ITEMS,
        payload: null
      })
    );
};

// Delete account & profile
export const deleteItem = () => dispatch => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    axios
      .delete('/api/Item')
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

// Item loading
export const setItemLoading = () => {
  return {
    type: ITEM_LOADING
  };
};

// Clear item
export const clearCurrentItem = () => {
  return {
    type: CLEAR_CURRENT_ITEM
  };
};
