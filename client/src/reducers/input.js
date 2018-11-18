import { CHANGE_TEXT_INPUT } from '../actions/types';

const initialState = { text: "" }

export default function (state = initialState, action) {

  switch (action.type) {

    case CHANGE_TEXT_INPUT: 
      return { ...state, text: action.text }
    
    default:
      return state;
  }
}