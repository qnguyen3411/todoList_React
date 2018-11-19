import { FILTERMODE, CHANGE_FILTER_MODE } from '../actions/types';

const initialState = {
  filterMode: FILTERMODE.SHOW_ALL
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER_MODE:
      return { ...state, filterMode: action.filterMode };
    default:
      return state;
  }
}