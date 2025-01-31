import styles from './Form.module.css'
import search from '../../../assets/logo/search.svg'
const Form = () => {
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
					onChange={() => {}}
					value=''
				/>
			</div>
			{false && <div className={styles.box}>
			</div>}
		</form>
	)
}

export default Form
