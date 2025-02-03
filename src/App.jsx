import { useDispatch } from 'react-redux'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import RoutesApp from './utils/routes/Routes'
import { useEffect } from 'react'
import { asyncFetchCategories } from './features/Redux/Slices/categoriesSlice.js'
import { asyncFetchProducts } from './features/Redux/Slices/productsSlice.js'
import UserForm from './components/User/UserForm.jsx'
import {
	localUserStorage,
	loginUser,
} from './features/Redux/Slices/userSlice.js'
function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		// fetch in Categories and Products
		dispatch(asyncFetchCategories())
		dispatch(asyncFetchProducts())
		// auth account from localStorage
		dispatch(localUserStorage())
		if (localStorage.getItem('user')) {
			const { email, password } = JSON.parse(localStorage.getItem('user'))
			dispatch(loginUser({ email: email, password: password }))
		}
	}, [dispatch])
	return (
		<>
			<div className='container'>
				<Header />
				<UserForm />
				<RoutesApp />
				<Footer />
			</div>
		</>
	)
}

export default App
