import { useDispatch } from 'react-redux'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import RoutesApp from './utils/routes/Routes'
import { useEffect } from 'react'
import { asyncFetch } from './features/Redux/Slices/categoriesSlice.js'
function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(asyncFetch())
	}, [dispatch])
	return (
		<>
			<div className='container'>
				<Header />
				<RoutesApp />
				<Footer />
			</div>
		</>
	)
}

export default App
