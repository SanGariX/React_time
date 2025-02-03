import styles from './Form.module.css'
import search from '../../../assets/logo/search.svg'
import { useEffect, useState } from 'react'
import { filterProduct } from '../../../features/Redux/Slices/filterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Form = () => {
	const [searchValue, setSearchValue] = useState('')
	const { status, name } = useSelector(({ filter }) => filter)
	const dispatch = useDispatch()
	const handleSearch = ({ target: { value } }) => {
		setSearchValue(value)
	}
	useEffect(() => {
		if (searchValue) {
			dispatch(filterProduct({ title: searchValue }))
		}
	}, [searchValue])
	return (
		<form className={styles.form}>
			<div className={styles.icon}>
				<img src={search} className={styles['search-img']} alt='search' />
			</div>
			<div className={styles.input}>
				<input
					type='search'
					name='search'
					placeholder='type your anything...'
					autoComplete='off'
					onChange={handleSearch}
					value={searchValue}
				/>
			</div>
			{!!searchValue && (
				<div className={styles.box}>
					{status === 'pending' ? (
						<p className={styles.box_status}>Pending...</p>
					) : !name.length ? (
						<p className={styles.box_status}>Not found</p>
					) : (
						<div className={styles.wrapper_box}>
							{name.map(({ id, title, images }) => (
								<div key={id}>
									<Link className={styles.box_item} to={`/product/${id}`}>
										<img src={images[0]} className={styles.images_box} />
										<p>{title}</p>
									</Link>
								</div>
							))}
						</div>
					)}
				</div>
			)}
		</form>
	)
}

export default Form
