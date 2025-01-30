import styles from './User.module.css'
import avatar from '../../../assets/logo/avatar.svg'
import { useSelector, useDispatch } from 'react-redux'
import { toggleForm } from '../../../features/Redux/Slices/userSlice.js'
const User = () => {
	const dispatch = useDispatch()
	const { currentUser } = useSelector(({ user }) => user)
	const handleClick = () => {
		if (!currentUser) {
			dispatch(toggleForm(true))
		}
	}
	return (
		<div className={styles.user} onClick={handleClick}>
			<img className={styles.avatar} src={avatar} />
			<div className={styles.username}>Guest</div>
		</div>
	)
}

export default User
