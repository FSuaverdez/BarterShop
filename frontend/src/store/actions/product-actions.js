import axios from 'axios'
import { productListActions } from '../slices/product/product-list-slice'
import { productDetailsActions } from '../slices/product/product-details-slice'

const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } =
  productListActions

const {
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} = productDetailsActions

export const getProductsList = () => {
  return async (dispatch) => {
    try {
      dispatch(PRODUCT_LIST_REQUEST())

      const { data } = await axios.get('/api/products')

      dispatch(PRODUCT_LIST_SUCCESS(data))
    } catch (err) {
      dispatch(
        PRODUCT_LIST_FAIL(
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message
        )
      )
    }
  }
}

export const getProductDetails = (id) => {
  return async (dispatch) => {
    try {
      dispatch(PRODUCT_DETAILS_REQUEST())

      const { data } = await axios.get(`/api/products/${id}`)

      dispatch(PRODUCT_DETAILS_SUCCESS(data))
    } catch (err) {
      dispatch(
        PRODUCT_DETAILS_FAIL(
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message
        )
      )
    }
  }
}
