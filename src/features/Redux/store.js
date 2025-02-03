import { configureStore } from '@reduxjs/toolkit'
import categories from './Slices/categoriesSlice'
import products from './Slices/productsSlice'
import singleProduct from "./Slices/singleSlice"
import user from "./Slices/userSlice"
import filter from './Slices/filterSlice'
const store = configureStore({
	reducer: {
		categories,
		products,
		singleProduct,
		user,
		filter,
	},
})

export default store
