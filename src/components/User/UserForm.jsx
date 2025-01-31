import { useDispatch, useSelector } from 'react-redux'
import styles from './User.module.css'
import UserSignupForm from './UserSignupForm'
import { toggleForm } from '../../features/Redux/Slices/userSlice'
import UserLoginForm from './UserLoginForm'
const UserForm = () => {
	const { showForm, formType } = useSelector(({ user }) => user)
    const dispatch = useDispatch()
    const handleClickClose = ()=>{
        dispatch(toggleForm())
    }
	return (
		<>
			{showForm ? (
				<>
					<div onClick={handleClickClose} className={styles.overlay}></div>
					{formType === "signup" ? <UserSignupForm /> : <UserLoginForm/>}
				</>
			) : (
				<></>
			)}
		</>
	)
}

export default UserForm
