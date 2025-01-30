import { configureStore } from '@reduxjs/toolkit'
import categories from './Slices/categoriesSlice'
import products from './Slices/productsSlice'
import singleProduct from "./Slices/singleSlice"
import user from "./Slices/userSlice"
const store = configureStore({
	reducer: {
		categories,
		products,
		singleProduct,
		user,
	},
})

export default store
