import { useDispatch, useSelector } from 'react-redux'
import Post from './Components/Post/Post'
import Products from '../../components/Products/Products'
import SideBar from '../../components/SideBar/SideBar'
import styles from './Home.module.css'
import Categories from './Components/Categories/Categories'
import Banner from './Components/Banner/Banner'
import { useEffect } from 'react'
import { filterByPrice } from '../../features/Redux/Slices/productsSlice'
const Home = () => {
	const dispatch = useDispatch()
	const { products, categories } = useSelector((state) => state)
	useEffect(() => {
		if (!products.list?.length) return
		dispatch(filterByPrice(100))
	}, [dispatch, products.list?.length])
	return (
		<main className={styles.main}>
			<div className={styles['wrapper-bottom_header']}>
				<SideBar status={categories.status} />
				<Post status={categories.status} />
			</div>
			<Products
				status={products.status}
				products={products.list}
				amount={5}
				title={'Trending'}
			/>
			{/* <Categories
				status={categories.status}
				products={categories.data}
				amount={5}
				title={'Worth seeing'}
			/> */}
			<Banner status={categories.status} />
			<Products
				status={products.status}
				products={products.filtered}
				amount={5}
				title={'Less than 100$'}
			/>
		</main>
	)
}

export default Home
