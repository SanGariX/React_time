import { configureStore } from '@reduxjs/toolkit'
import categories from './Slices/categoriesSlice'
import products from './Slices/productsSlice'

const store = configureStore({
	reducer: {
		categories,
		products,
	},
})

export default store
