import styles from './User.module.css'
import avatar from '../../../assets/logo/avatar.svg'
const User = () => {
	return (
		<div className={styles.user}>
			<img
				className={styles.avatar}
				src={avatar}
			/>
			<div className={styles.username}>Guest</div>
		</div>
	)
}

export default User
