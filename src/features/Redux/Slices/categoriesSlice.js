import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../../utils/Constant/fetchConstant'
const initialState = {
	data: [],
	status: '',
}
export const asyncFetch = createAsyncThunk(
	'data/respons/asyncFetch',
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
			.addCase(asyncFetch.rejected, (state, action) => {
				state.data = action.payload
				state.status = 'rejected'
			})
			.addCase(asyncFetch.fulfilled, (state, action) => {
				state.data = action.payload
				state.status = 'fulfilled'
			})
			.addCase(asyncFetch.pending, (state, action) => {
				state.data = action.payload
				state.status = 'pending'
			})
	},
})

export default categoriesSlice.reducer
