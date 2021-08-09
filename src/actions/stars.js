import { types } from "../type/types"

export const addStarsToProduct = (stars) => ({
  type: types.Stars,
  payload: stars
})