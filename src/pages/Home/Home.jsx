import { useSelector } from 'react-redux'
import Post from '../../components/Post/Post'
import Products from '../../components/Products/Products'
import SideBar from '../../components/SideBar/SideBar'
import styles from './Home.module.css'
import SkeletonError from '../../components/Skeleton/SkeletonError'
import SkeletonPending from '../../components/Skeleton/SkeletonPending'
import Categories from '../../components/Categories/Categories'
import Banner from '../../components/Banner/Banner'
const Home = () => {
	const { products, categories } = useSelector((state) => {
		return state
	})
	return (
		<main className={styles.main}>
			<div className={styles['wrapper-bottom_header']}>
				<SideBar />
				<Post />
			</div>
			{products.status === 'pending' ? (
				<SkeletonPending />
			) : products.status === 'error' ? (
				<SkeletonError />
			) : (
				<Products products={products.list} amount={5} title={'Trending'} />
			)}
			<Categories products={categories.data} amount={5} title={'Worth seeing'} />
			<Banner/>
		</main>
	)
}

export default Home
