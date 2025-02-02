import { Link } from 'react-router-dom'
import styles from './Logo.module.css'
import logo from '../../../assets/logo/Logo.svg'
const Logo = () => {
	return (
		<div className={styles.logo}>
			<h1 className={styles['logo-title']}>Swiss watch</h1>
			<Link to='/'>
				<img src={logo} alt='swiss watch' />
			</Link>
		</div>
	)
}

export default Logo
