import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	sliceKey: null,
}
const categories = createSlice({
	name: 'slice',
	initialState,
	reducers: {
		changeCategories: (state) => {
			console.log(state)
		},
	},
})

export const {changeCategories } = categories.actions
export default categories.reducer