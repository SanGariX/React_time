import { useEffect, useState } from 'react'
import styles from './Profile.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {
	resetAccount,
	updateUser,
} from '../../features/Redux/Slices/userSlice'
import SideBar from '../../components/SideBar/SideBar'
import close from '../../assets/logo/clear.svg'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { currentUser } = useSelector((state) => state.user)
	const [error, setError] = useState(false)
	const [popup, setPopup] = useState(false)
	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
		avatar:
			'https://img.freepik.com/free-photo/beautiful-selective-focus-shot-crystal-ball-reflecting-breathtaking-sunset_181624-8579.jpg?semt=ais_hybrid',
	})
	const [image, setImage] = useState(values.avatar)
	useEffect(() => {
		if (!currentUser) return
		setValues(currentUser)
	}, [currentUser])
	const handleChange = (evt) => {
		const target = evt.target
		setValues({ ...values, [target.name]: target.value })
	}
	const handleSubmit = (evt) => {
		evt.preventDefault()
		const isEmpty = Object.values(values).every((item) => item)
		isEmpty ? setError(false) : setError(true)
		if (!isEmpty) return
		dispatch(updateUser(values))
	}
	const exitAccount = () => {
        console.log("111")
		dispatch(resetAccount())
		navigate("/")
	}
	return (
		<div className={styles.profile}>
			{!currentUser ? (
				<p className={styles.user_error}>You need login</p>
			) : (
				<>
				    <div className={styles.wrapper}>
    					<SideBar />
    					<div className={styles.wrapper_form}>
    						<div className={styles.box_img}>
    							<img src={image} />
    						</div>
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
    							<div className={styles.box_input}>
    								<input
    									placeholder='image link'
    									type='text'
    									name='avatar'
    									value={values.avatar}
    									autoComplete='off'
    									onInput={(evt) => {
    										handleChange(evt)
    										setImage(evt.target.value)
    									}}
    								/>
    								<p
    									onClick={() => {
    										setPopup(true)
    									}}
    								>
    									Як вставити?
    								</p>
    							</div>
    							{error && (
    								<div className={styles.error}>Ой, сталася помилка...</div>
    							)}
    							<button type='submit' className={styles.form_btn}>
    								Update an account
    							</button>
    						</form>
    					</div>
    				</div>
    							<button className={`${styles.form_btn} ${styles.form_bt_exit}`} onClick={exitAccount}>Exit account</button>
				</>
			)}
			{popup && (
				<>
					<div
						onClick={() => {
							setPopup(false)
						}}
						className={styles.overlay}
					></div>
					<div className={styles.wrapper_popup}>
						<div className={styles.popup}>
							<div
								onClick={() => {
									setPopup(false)
								}}
								className={styles.close}
							>
								<img src={close}></img>
							</div>
							<ul className={styles.popup_text}>
								<li>1. Заходите на будь який сайт</li>
								<li>2. Нажимаєте ПКМ на зображення</li>
								<li>3. Та вибираєте {'"Копіювати адресу зображення"'}</li>
							</ul>
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default Profile
