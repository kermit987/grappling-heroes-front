import { combineReducers } from 'redux'
import {
  UPDATE_NAME,
  UPDATE_LASTNAME,
  UPDATE_BIRTH,
  UPDATE_WEIGHT,
  UPDATE_BELT,
  UPDATE_STRIPE
} from 'Component/Action'

const initialState = {
  name: '',
  lastname: '',
  birth: '',
  weight: '',
  belt: '',
  stripe: ''
}

function profile(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload
      }
    case UPDATE_LASTNAME:
      return {
        ...state,
        lastname: action.payload
      }
    case UPDATE_BIRTH:
      return {
        ...state,
        birth: action.payload
      }

    case UPDATE_WEIGHT:
      return {
        ...state,
        weight: action.payload
      }

    case UPDATE_BELT:
      return {
        ...state,
        belt: action.payload
      }

    case UPDATE_STRIPE:
      return {
        ...state,
        stripe: action.payload
      }

    default:
      return state
  }
}

const reducer = combineReducers({ profile })

export default reducer

// export default profile
