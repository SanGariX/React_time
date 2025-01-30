import { Link } from 'react-router-dom'
import styles from './Account.module.css'
import favorite from '../../../assets/logo/favorite.svg'
import cart from '../../../assets/logo/cart.svg'
import { useSelector } from 'react-redux'
const Account = () => {
	const { cart: userCart, favorites: userFavorite } = useSelector((state) => {
		return state.user
	})
	return (
		<div className={styles.account}>
			<Link to='/favorite' className={styles.favorites}>
				<div className={styles['icon-fav']}>
					<img src={favorite} alt='your favorite' />
				</div>
				<span className={styles.count}>{userCart.length}</span>
			</Link>
			<Link to='/cart' className={styles.cart}>
				<div className={styles['icon-cart']}>
					<img src={cart} alt='your cart' />
				</div>
				<span className={styles.count}>{userFavorite.length}</span>
			</Link>
		</div>
	)
}

export default Account
