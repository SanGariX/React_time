import { useEffect, useState } from 'react'
import styles from './Product.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { asyncFetchItemProduct } from '../../features/Redux/Slices/singleSlice'
import SideBar from '../../components/SideBar/SideBar'
import Desc from '../../components/Desc/Desc'
import Products from '../../components/Products/Products'
import { getRelatedProducts } from '../../features/Redux/Slices/productsSlice'
const Product = () => {
	const [error, setError] = useState(false)
	const [timer, setTimer] = useState(5)
	const navigate = useNavigate()
	const { id } = useParams()
	// getting data from redux
	const {
		singleProduct: { data, status },
		categories: { status: statusCategory },
		products: { related, list, status: productsStatus },
	} = useSelector((state) => state)
	const dispatch = useDispatch()
	// request for a product with a specific id
	// _____________
	useEffect(() => {
		if (id) {
			dispatch(asyncFetchItemProduct(id))
		}
	}, [dispatch, id])
	// when an error occurs on the backend or 
	// there is no id, then return to the main page after a while
	// _____________
	useEffect(() => {
		if (
			status !== 'rejected' &&
			statusCategory !== 'rejected' &&
			productsStatus !== 'rejected'
		)
			return
		setError(true)
		const namesInterval = setInterval(() => {
			if (timer === 0) {
				navigate('/')
				clearInterval()
				return
			}
			setTimer(timer - 1)
			return
		}, 1000)
		return () => clearInterval(namesInterval)
	}, [status, timer])
	// a component with product recommendations from redux
	// __________________
	useEffect(() => {
		if (data) {
			dispatch(getRelatedProducts({ idCategory: data.category.id }))
		}
	}, [data, dispatch, list])
	return (
		<main className={styles.main}>
			<div className={styles['wrapper-bottom_header']}>
				{!error && <SideBar status={statusCategory} />}
				{!error && <Desc data={data} status={status} />}
			</div>
			{!error && <Products
				status={productsStatus}
				products={related}
				amount={5}
				title={'Related products'}
			/>}
			{error && (
				<div className={styles.wrapper_error}>
					<h1 className={styles.error}>
						Сталася помилка <span>Сторінка повернеться через {timer}с</span>
					</h1>
				</div>
			)}
		</main>
	)
}

export default Product
