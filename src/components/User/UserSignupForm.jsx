import { useState } from 'react'
import styles from './User.module.css'
import { useDispatch } from 'react-redux'
import { creatUser, toggleForm, toggleTypeForm } from '../../features/Redux/Slices/userSlice'
import close from '../../assets/logo/clear.svg'
const UserSignupForm = () => {

// hhh@gmail.com
// hhh
// 123123
	const dispatch = useDispatch()
	const [error, setError] = useState(false)
	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
		avatar: 'https://img.freepik.com/free-photo/beautiful-selective-focus-shot-crystal-ball-reflecting-breathtaking-sunset_181624-8579.jpg?semt=ais_hybrid',
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
		dispatch(creatUser(values))
		dispatch(toggleForm(false))
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
				<input
					placeholder='img link'
					type='text'
					name='avatar'
					value={values.avatar}
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
						dispatch(toggleTypeForm("login"))
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
