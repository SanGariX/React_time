import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Cart from '../../pages/Cart/Cart'
import Category from '../../pages/Category/Category'
import Products from '../../components/Products/Products'

const RoutesApp = () => (
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='/cart' element={<Cart />} />
		<Route path='/category/:id' element={<Category />} />
		<Route path='/products/:id' element={<Products />} />
	</Routes>
)

export default RoutesApp
