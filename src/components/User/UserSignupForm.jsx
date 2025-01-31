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
		avatar: 'https://www.google.com/imgres?q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8&imgurl=https%3A%2F%2Fcn22.nevsedoma.com.ua%2Fp%2F25%2F2583%2F105_files%2F231781_1_nevsedoma_com_ua.jpg&imgrefurl=https%3A%2F%2Fnevsedoma.com.ua%2F557891-kartinki-i-risunki-kotorye-zastavlyayut-zadumatsya-15-foto.html&docid=5MVaSaZvMYQoZM&tbnid=2dXQUPNbYSKa_M&vet=12ahUKEwibi9L5paCLAxX9KRAIHdYpICAQM3oECEkQAA..i&w=640&h=634&hcb=2&ved=2ahUKEwibi9L5paCLAxX9KRAIHdYpICAQM3oECEkQAA',
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
