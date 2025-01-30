import { useDispatch } from 'react-redux'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import RoutesApp from './utils/routes/Routes'
import { useEffect } from 'react'
import { asyncFetchCategories } from './features/Redux/Slices/categoriesSlice.js'
import { asyncFetchProducts } from './features/Redux/Slices/productsSlice.js'
import UserForm from './components/User/UserForm.jsx'
function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(asyncFetchCategories())
		dispatch(asyncFetchProducts())
	}, [dispatch])
	return (
		<>
			<div className='container'>
				<Header />
				<UserForm/>
				<RoutesApp />
				<Footer />
			</div>
		</>
	)
}

export default App
