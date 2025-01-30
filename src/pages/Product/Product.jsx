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
	const {
		singleProduct: { data, status },
		categories: { status: statusCategory },
		products: { related, status: productsStatus },
	} = useSelector((state) => state)
	const dispatch = useDispatch()
	useEffect(() => {
		if (id) {
			dispatch(asyncFetchItemProduct(id))
		}
	}, [dispatch, id])
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
	useEffect(() => {
		if (data) {
			dispatch(getRelatedProducts({ idCategory: data.category.id }))
		}
	}, [data, dispatch])
	return (
		<>
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
		</>
	)
}

export default Product
