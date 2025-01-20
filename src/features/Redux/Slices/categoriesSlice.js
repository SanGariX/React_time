import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../../utils/Constant/fetchConstant'
const initialState = {
	data: [],
	status: '',
}
export const asyncFetchCategories = createAsyncThunk(
	'data/respons/asyncFetchCategories',
	async (_, thunkApi) => {
		try {
			const respons = await axios(`${BASE_URL}/categories`)
			return respons.data
		} catch (err) {
			console.log(err)
			return thunkApi.rejectWithValue(err)
		}
	}
)
const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(asyncFetchCategories.rejected, (state, action) => {
				state.data = action.payload
				state.status = 'rejected'
			})
			.addCase(asyncFetchCategories.fulfilled, (state, action) => {
				state.data = action.payload
				state.status = 'fulfilled'
			})
			.addCase(asyncFetchCategories.pending, (state, action) => {
				state.data = action.payload
				state.status = 'pending'
			})
	},
})

export default categoriesSlice.reducer
