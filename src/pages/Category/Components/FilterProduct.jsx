import { useParams } from 'react-router-dom'
import styles from './filterProduct.module.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterProduct } from '../../../features/Redux/Slices/filterSlice'
const FilterProduct = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const defaultParams = {
		title: '',
		price_min: '',
		price_max: '',
		categoryId: id,
	}
	const [params, setParams] = useState(defaultParams)
	useEffect(() => {
		if (!id) return
		setParams({ ...defaultParams, categoryId: id })
	}, [id])
	const handleChangeinput = (evt) => {
		setParams({ ...params, [evt.target.name]: evt.target.value })
	}
	const handleSubmit = (evt)=>{
		evt.preventDefault()
		dispatch(filterProduct(params))
	}
	return (
		<div className={styles.filter}>
			<h3 className={styles.title_filter}>Filter</h3>
			<form onSubmit={handleSubmit} className={styles.filters}>
				<input
					type='text'
					name='title'
					placeholder='Product name'
					onChange={handleChangeinput}
					value={params.title}
				/>
				<input
					type='text'
					name='price_min'
					placeholder='min'
					onChange={handleChangeinput}
					value={params.price_min}
				/>
				<input
					type='text'
					name='price_max'
					placeholder='max'
					onChange={handleChangeinput}
					value={params.price_max}
				/>
				<button className={styles.btn_filter} type='submit'>
					Search
				</button>
			</form>
		</div>
	)
}

export default FilterProduct
