import { useState } from 'react'
import styles from './User.module.css'
import { useDispatch } from 'react-redux'
import { loginUser, toggleForm, toggleTypeForm } from '../../features/Redux/Slices/userSlice'
import close from '../../assets/logo/clear.svg'
const UserLoginForm = () => {
	// hhh@gmail.com
	// hhh
	// 123123
	const dispatch = useDispatch()
	const [error, setError] = useState(false)
	const [values, setValues] = useState({
		email: '',
		password: '',
	})
	const handleChange = (evt) => {
		const target = evt.target
		setValues({ ...values, [target.name]: target.value })
	}
	const handleClickClose = () => {
		dispatch(toggleForm())
	}
	const handleSubmit = (evt) => {
		evt.preventDefault()
		const isEmpty = Object.values(values).every((item) => item)
		isEmpty ? setError(false) : setError(true)
		if (!isEmpty) return
		dispatch(loginUser(values))
		dispatch(toggleForm(false))
	}
	return (
		<div className={styles.wrapper}>
			<div onClick={handleClickClose} className={styles.close}>
				<img src={close}></img>
			</div>

			<h2 className={styles.title}>Login</h2>
			<form onSubmit={handleSubmit} className={styles.form}>
				<input
					placeholder='your email'
					type='email'
					name='email'
					value={values.email}
					autoComplete='off'
					onChange={(evt) => {
						handleChange(evt)
					}}
				/>
				<input
					placeholder='your password'
					type='password'
					name='password'
					value={values.password}
					autoComplete='off'
					onChange={(evt) => {
						handleChange(evt)
					}}
				/>
				<button type='submit' className={styles.form_btn}>
					Login an account
				</button>
			</form>
			{error && <div className={styles.error}>Ой, сталася помилка...</div>}
			<div className={styles.link}>
				Creat an{' '}
				<span
					onClick={() => {
						dispatch(toggleTypeForm('signup'))
					}}
					className={styles.account}
				>
					account{' '}
				</span>
			</div>
		</div>
	)
}

export default UserLoginForm
