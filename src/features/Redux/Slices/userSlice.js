import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../../utils/Constant/fetchConstant'
const initialState = {
	currentUser: null,
	cart: [],
	favorites: [],
	related: [],
	status: '',
	formType: 'signup',
	showForm: false,
}
export const creatUser = createAsyncThunk(
	'users/creatUser',
	async (payload, thunkApi) => {
		try {
			const respons = await axios.post(`${BASE_URL}/users`, payload)
			return respons.data
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
		addItemCart: (state, { payload }) => {
			let newCart = [...state.cart]
			const index = newCart.findIndex((item) => item.id === payload.id)

			if (index !== -1) {
				newCart[index] = {
					...newCart[index],
					quantity: newCart[index].quantity + 1,
				}
			} else {
				newCart.push({ ...payload, quantity: 1 })
			}
			state.cart = newCart
		},
		addItemFavorites: (state, { payload }) => {
			let newFavorites = [...state.favorites]
			const index = newFavorites.findIndex((item) => item.id === payload.id)

			if (index !== -1) {
				newFavorites[index] = {
					...newFavorites[index],
					quantity: newFavorites[index].quantity + 1,
				}
			} else {
				newFavorites.push({ ...payload, quantity: 1 })
			}
			state.favorites = newFavorites
		},
		toggleForm: (state, { payload }) => {
			state.showForm = payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(creatUser.fulfilled, (state, action) => {
			state.data = action.payload
			state.status = 'fulfilled'
		})
	},
})

export default userSlice.reducer
export const { addItemCart, addItemFavorites, toggleForm } = userSlice.actions
