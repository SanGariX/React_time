import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../../utils/Constant/fetchConstant'
const initialState = {
	data: "",
	status: '',
}
export const asyncFetchItemProduct = createAsyncThunk(
	'data/respons/asyncFetchItemProduct',
	async (id, thunkApi) => {
		try {
			const respons = await axios(`${BASE_URL}/products/${id}`)
			return respons.data
		} catch (err) {
			console.log(err)
			return thunkApi.rejectWithValue(err)
		}
	}
)
const singleSlice = createSlice({
	name: 'singleProduct',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(asyncFetchItemProduct.rejected, (state) => {
				state.status = 'rejected'
			})
			.addCase(asyncFetchItemProduct.fulfilled, (state, action) => {
				state.data = action.payload
				state.status = 'fulfilled'
			})
			.addCase(asyncFetchItemProduct.pending, (state) => {
				state.status = 'pending'
			})
	},
})

export default singleSlice.reducer
