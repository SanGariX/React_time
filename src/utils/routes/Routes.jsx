import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Cart from '../../pages/Cart/Cart'
import Category from '../../pages/Category/Category'
import Product from '../../pages/Product/Product'
import Profile from '../../pages/Profile/Profile'
import Favorites from '../../pages/Favorites/Favorites'

const RoutesApp = () => (
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='/cart' element={<Cart />} />
		<Route path='/favorite' element={<Favorites />} />
		<Route path='/category/:id' element={<Category />} />
		<Route path='/product/:id' element={<Product />} />
		<Route path='/profile' element={<Profile />} />
	</Routes>
)

export default RoutesApp
