import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../../utils/Constant/fetchConstant'
import { builderUrl } from '../../../utils/FragmentCod/common'
import { filterPricer } from '../../../utils/FragmentCod/filterPrice'
const initialState = {
	name: [],
	status: '',
}
export const filterProduct = createAsyncThunk(
	'users/searchProduct',
	async (params, thunkApi) => {
		try {
			const respons = await axios(builderUrl(`${BASE_URL}/products/`, params))
			return filterPricer(params.price_min, params.price_max, respons.data)
		} catch (err) {
			console.log(err)
			return thunkApi.rejectWithValue(err)
		}
	}
)
const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(filterProduct.fulfilled, (state, { payload }) => {
			state.name = payload
			state.status = 'fulfilled'
		})
		builder.addCase(filterProduct.pending, (state) => {
			state.name
			state.status = 'pending'
		})
		builder.addCase(filterProduct.rejected, (state) => {
			state.name
			state.status = 'rejected'
		})
	},
})

export default filterSlice.reducer
// export const {  } = filterSlice.actions
