import _ from 'lodash';
import {
  EDIT_STREAM,
  DELETE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM
} from '../actions/types';

const initialState = {};

const streamReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      console.log(action);
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default streamReducer;
