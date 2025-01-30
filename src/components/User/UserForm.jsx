import { useDispatch, useSelector } from 'react-redux'
import styles from './User.module.css'
import UserSignupForm from './UserSignupForm'
import { toggleForm } from '../../features/Redux/Slices/userSlice'
const UserForm = () => {
	const { showForm } = useSelector(({ user }) => user)
    const dispatch = useDispatch()
    const handleClickClose = ()=>{
        dispatch(toggleForm())
    }
	return (
		<>
			{showForm ? (
				<>
					<div onClick={handleClickClose} className={styles.overlay}></div>
					<UserSignupForm />
				</>
			) : (
				<></>
			)}
		</>
	)
}

export default UserForm
