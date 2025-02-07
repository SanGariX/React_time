import { useParams } from 'react-router-dom'
import styles from './SingleCategory.module.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterProduct } from '../../../features/Redux/Slices/filterSlice'
import Products from '../../../components/Products/Products'
const SingleCategory = () => {
	const dispatch = useDispatch()
	const { name, status } = useSelector((state) => state.filter)

	const { id } = useParams()
	useEffect(() => {
		dispatch(filterProduct({ categoryId: id }))
	}, [id])
	return (
		<>
			<section className={styles.wrapper}>
				<h2 className={styles.title}>{!!name.length && name[0]?.category.name}</h2>
				{status === 'pending' ? (
					<div className={styles.loading}> Loading... </div>
				) : status === 'rejected' ? (
					<div className={styles.error}> Oh! Error </div>
				) : !name.length ? (
					<>
						<div className={styles.nonItems}> Not found </div>
					</>
				) : null}

				{!!name.length && (
					<Products
						products={name}
						amount={name.length}
						style={{ flexWrap: 'wrap' }}
					/>
				)}
			</section>
		</>
	)
}

export default SingleCategory
