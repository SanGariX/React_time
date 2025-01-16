import { configureStore } from '@reduxjs/toolkit'
import categories from './Slices/categoriesSlice'

const store = configureStore({
	reducer: {
		categories,
	},
})

export default store
