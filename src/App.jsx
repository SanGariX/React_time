import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import RoutesApp from './routes/Routes'

function App() {
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
