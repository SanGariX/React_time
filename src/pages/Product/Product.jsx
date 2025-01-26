import { useEffect, useState } from 'react'
import styles from './Product.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { asyncFetchItemProduct } from '../../features/Redux/Slices/singleSlice'
import { useNavigate, useParams } from 'react-router-dom'
// { title, price, images }
const Product = () => {
	const [error, setError] = useState(false)
	const [timer, setTimer] = useState(5)
	const { id } = useParams()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { data, status } = useSelector((state) => state.singleProduct)

	useEffect(() => {
		if (id) {
			dispatch(asyncFetchItemProduct(id))
		}
	}, [dispatch, id])
	useEffect(() => {
		if (status !== 'rejected') return
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
	let currentImg = !data ? null : data.images.length ? data.images[0] : null
	console.log(currentImg)
	const images = !data ? null : data.images.length ? data.images : null
	return (
		<>
			<section className={styles.product}>
				<div className={styles.images}>
					<img src={currentImg} />
					<ul className={styles.list_img}>
						{data.images &&
							images.map((item, i) => (
								<li key={i} className={styles.list_item}>
									<img src={item} />
								</li>
							))}
					</ul>
				</div>
			</section>
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
