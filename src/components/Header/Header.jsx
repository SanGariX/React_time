import styles from './Header.module.css'
import Logo from '../BetweenComponents/Logo/Logo'
import User from './User/User'
import Form from './Form/Form'
import Account from './Account/Account'
const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<nav className={styles.info}>
				<User />
				<Form />
				<Account />
			</nav>
		</header>
	)
}

export default Header
