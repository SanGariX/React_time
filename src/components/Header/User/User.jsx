import styles from './User.module.css'
import avatar from '../../../assets/logo/avatar.svg'
import { useSelector, useDispatch } from 'react-redux'
import { toggleForm } from '../../../features/Redux/Slices/userSlice.js'
import { useEffect, useState } from 'react'
const User = () => {
	const dispatch = useDispatch()
	const { currentUser } = useSelector(({ user }) => user)
	const [value, setValue] = useState({
		name: 'Guest',
		avatar: avatar,
	})
	console.log(value.avatar)
	useEffect(() => {
		if(!currentUser) return 
		setValue(currentUser)
	}, [currentUser])
	const handleClick = () => {
		if (!currentUser) {
			dispatch(toggleForm(true))
		}
	}
	return (
		<div className={styles.user} onClick={handleClick}>
			<img className={styles.avatar} src={value.avatar} />
			<div className={styles.username}>{value.name}</div>
		</div>
	)
}

export default User
