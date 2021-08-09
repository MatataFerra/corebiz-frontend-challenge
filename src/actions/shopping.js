import { types } from "../type/types"

export const addProductToCart = (value) => ({
  type: types.Add,
  payload: value
})