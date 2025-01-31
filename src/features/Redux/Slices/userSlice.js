import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../../utils/Constant/fetchConstant'
import { findItemFavoriteandCart } from '../../../utils/FragmentCod/findItemFavoriteandCart'
const initialState = {
	currentUser: null,
	cart: [],
	favorites: [],
	related: [],
	status: '',
	formType: 'signup',
	showForm: false,
}
const addCurrentUser = (state, action) => {
	state.currentUser = action.payload
	state.status = 'fulfilled'
}
export const creatUser = createAsyncThunk(
	'users/creatUser',
	async (payload, thunkApi) => {
		try {
			const respons = await axios.post(`${BASE_URL}/users/`, payload)
			return respons.data
		} catch (err) {
			console.log(err)
			return thunkApi.rejectWithValue(err)
		}
	}
)
export const loginUser = createAsyncThunk(
	'users/loginUser',
	async (payload, thunkApi) => {
		try {
			const respons = await axios.post(`${BASE_URL}/auth/login`, payload)
			const option = {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${respons.data.access_token}`,
				},
			}
			const login = await axios(`${BASE_URL}/auth/profile`, option)
			return login.data
		} catch (err) {
			console.log(err)
			return thunkApi.rejectWithValue(err)
		}
	}
)
const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addItem: (state, { payload }) => {
			if (!state.currentUser) {
				state.showForm = true
				return
			}
			let newArr =
				payload.type === 'cart' ? [...state.cart] : [...state.favorites]
			const result = findItemFavoriteandCart(newArr, payload.data)
			payload.type === 'cart' ? state.cart = result : state.favorites = result
		},
		toggleForm: (state, { payload }) => {
			state.showForm = payload
		},
		toggleTypeForm: (state, { payload }) => {
			state.formType = payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(creatUser.fulfilled, addCurrentUser)
		builder.addCase(loginUser.fulfilled, addCurrentUser)
	},
})

export default userSlice.reducer
export const { addItem, toggleForm, toggleTypeForm } = userSlice.actions
