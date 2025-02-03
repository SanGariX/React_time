import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../../utils/Constant/fetchConstant'
import { builderUrl } from '../../../utils/FragmentCod/common'
const initialState = {
    name: [],
	status: "",
}
export const filterProduct = createAsyncThunk(
	'users/searchProduct',
	async (params, thunkApi) => {
		try {
			const respons = await axios(builderUrl(`${BASE_URL}/products/`, params))
			return respons.data
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
        builder.addCase(filterProduct.fulfilled,(state, {payload})=>{
            state.name = payload
			state.status = "fulfilled"
        })
        builder.addCase(filterProduct.pending,(state, payload)=>{
            state.name = payload
			state.status = "pending"
        })
        builder.addCase(filterProduct.rejected,(state, payload)=>{
            state.name = payload
			state.status = "rejected"
        })
    },
})

export default filterSlice.reducer
// export const {  } = filterSlice.actions