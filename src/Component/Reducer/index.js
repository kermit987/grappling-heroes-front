// import { combineReducers } from 'redux';
import { FormActions } from 'Component/Action';

const initialState = {
  name: '',
  lastname: '',
  birth: '',
  weight: '',
  belt: '',
  stripe: ''
};

function profile(state = initialState, action) {
  switch (action.type) {
    case FormActions.UPDATE_NAME:
      return {
        ...state,
        name: action.payload
      };
    case FormActions.UPDATE_LASTNAME:
      return {
        ...state,
        lastname: action.payload
      };
    case FormActions.UPDATE_BIRTH:
      return {
        ...state,
        birth: action.payload
      };
    case FormActions.UPDATE_WEIGHT:
      console.log('value of action payload ', typeof action.payload);
      return {
        ...state,
        weight: action.payload
      };
    case FormActions.UPDATE_BELT:
      return {
        ...state,
        belt: action.payload
      };

    case FormActions.UPDATE_STRIPE:
      return {
        ...state,
        stripe: action.payload
      };
    default:
      return state;
  }
}

// const reducer = combineReducers({ profile });

// export default reducer;

export default profile;
