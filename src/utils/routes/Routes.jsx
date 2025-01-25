import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Cart from '../../pages/Cart/Cart'
import Category from '../../pages/Category/Category'
import Product from '../../pages/Product/Product'

const RoutesApp = () => (
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='/cart' element={<Cart />} />
		<Route path='/category/:id' element={<Category />} />
		<Route path='/product/:id' element={<Product />} />
	</Routes>
)

export default RoutesApp
