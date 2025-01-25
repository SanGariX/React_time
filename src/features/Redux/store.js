import { configureStore } from '@reduxjs/toolkit'
import categories from './Slices/categoriesSlice'
import products from './Slices/productsSlice'
import singleProduct from "./Slices/singleSlice"
const store = configureStore({
	reducer: {
		categories,
		products,
		singleProduct,
	},
})

export default store
