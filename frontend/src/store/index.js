import { configureStore } from '@reduxjs/toolkit'
import { watchListSlice } from './slices/watch-list/watchList-slice'
import { productDetailsSlice } from './slices/product/product-details-slice'
import { productListSlice } from './slices/product/product-list-slice'
import { userLoginSlice } from './slices/user/user-login-slice'
import { userRegisterSlice } from './slices/user/user-register-slice'
import { userDetailsSlice } from './slices/user/user-details-slice'
import { userUpdateProfileSlice } from './slices/user/user-update-slice'

const store = configureStore({
  reducer: {
    productList: productListSlice.reducer,
    productDetails: productDetailsSlice.reducer,
    watchList: watchListSlice.reducer,
    userLogin: userLoginSlice.reducer,
    userRegister: userRegisterSlice.reducer,
    userDetails: userDetailsSlice.reducer,
    userUpdateProfile: userUpdateProfileSlice.reducer,
  },
})

export default store
