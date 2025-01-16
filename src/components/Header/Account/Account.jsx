import { Link } from 'react-router-dom'
import styles from './Account.module.css'
import favorite from '../../../assets/logo/favorite.svg'
import cart from '../../../assets/logo/cart.svg'
const Account = () => {
	return (
		<div className={styles.account}>
			<Link to='/favorite' className={styles.favorites}>
				<div className={styles['icon-fav']}>
					<img src={favorite} alt='your favorite' />
				</div>
			</Link>
			<Link to='/cart' className={styles.favorites}>
				<div className={styles['icon-cart']}>
					<img src={cart} alt='your cart' />
				</div>
			</Link>
			<span className={styles.count}>3</span>
		</div>
	)
}

export default Account
