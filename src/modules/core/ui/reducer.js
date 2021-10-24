import {SET_LOADING, SET_MODAL, SET_LOADING_SPLASH} from './types';

import initialState from './initialState';

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case SET_MODAL:
      return {
        ...state,
        modal: payload,
      };
    case SET_LOADING_SPLASH:
      return {
        ...state,
        loadingSplash: payload,
      };
    default:
      return state;
  }
};
