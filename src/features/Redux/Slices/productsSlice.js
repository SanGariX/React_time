import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../../utils/Constant/fetchConstant'
const initialState = {
	list: [],
	filtered: [],
	// related: [],
	status: '',
}
export const asyncFetchProducts = createAsyncThunk(
	'data/respons/asyncFetchProducts',
	async (_, thunkApi) => {
		try {
			const respons = await axios(`${BASE_URL}/products`)
			return respons.data
		} catch (err) {
			console.log(err)
			return thunkApi.rejectWithValue(err)
		}
	}
)
const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		filterByPrice: (state, { payload }) => {
			state.filtered = state.list.filter(({ price }) => price < payload)
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(asyncFetchProducts.rejected, (state, action) => {
				state.list = action.payload
				state.status = 'rejected'
			})
			.addCase(asyncFetchProducts.fulfilled, (state, action) => {
				state.list = action.payload
				state.status = 'fulfilled'
			})
			.addCase(asyncFetchProducts.pending, (state, action) => {
				state.list = action.payload
				state.status = 'pending'
			})
	},
})
export const { filterByPrice } = productSlice.actions
export default productSlice.reducer
