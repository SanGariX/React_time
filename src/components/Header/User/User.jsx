import styles from './User.module.css'
import avatar from '../../../assets/logo/avatar.svg'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toggleForm } from '../../../features/Redux/Slices/userSlice.js'
import { useEffect, useState } from 'react'
const User = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { currentUser } = useSelector(({ user }) => user)
	const [value, setValue] = useState({
		name: 'Guest',
		avatar: avatar,
	})
	useEffect(() => {
		if (!currentUser) {
			setValue({
				name: 'Guest',
				avatar: avatar,
			})
			return 
		}
		setValue(currentUser)
	}, [currentUser])
	const handleClick = () => {
		if (!currentUser) {
			dispatch(toggleForm(true))
			return
		}
		navigate('/profile')
	}
	return (
		<div className={styles.user} onClick={handleClick}>
			<div className={styles.box_img}>
				<img className={styles.avatar} src={value.avatar} />
			</div>
			<div className={styles.username}>{value.name}</div>
		</div>
	)
}

export default User
