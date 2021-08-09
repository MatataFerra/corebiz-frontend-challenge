import { types } from '../type/types'

export const initialStarState = {
  stars: 0,
}

export const starReducer = (state = initialStarState, action) => {

  switch (action.type) {
    case types.Stars:
      return {
        ...state,
        stars: action.payload
      }
      
  
    default:
      return state;
  }

}