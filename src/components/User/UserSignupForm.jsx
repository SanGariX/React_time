import { useState } from 'react'
import styles from './User.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleForm } from '../../features/Redux/Slices/userSlice'
import close from '../../assets/logo/clear.svg'
const UserSignupForm = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [error, setError] = useState(false)
	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
		// avatar: '',
	})
	const handleChange = (evt) => {
		const target = evt.target
		setValues({ ...values, [target.name]: target.value })
	}
	const handleClickAccount = () => {
		dispatch(toggleForm(false))
		navigate('/autorisation')
	}
	const handleClickClose = () => {
		dispatch(toggleForm())
	}
	const handleSubmit = (evt) => {
		evt.preventDefault()
		const isEmpty = Object.values(values).every((item) => item)
		isEmpty ? setError(false) : setError(true)
		if(!isEmpty) return 
	}
	return (
		<div className={styles.wrapper}>
			<div onClick={handleClickClose} className={styles.close}>
				<img src={close}></img>
			</div>
			
			<h2 className={styles.title}>Sing up</h2>
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
					placeholder='your name'
					type='name'
					name='name'
					value={values.name}
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
					Creat an account
				</button>
			</form>
			{error && <div className={styles.error}>Ой, сталася помилка...</div>}
			<div className={styles.link}>
				I have an{' '}
				<span
					onClick={() => {
						handleClickAccount()
					}}
					className={styles.account}
				>
					account{' '}
				</span>
			</div>
		</div>
	)
}

export default UserSignupForm
