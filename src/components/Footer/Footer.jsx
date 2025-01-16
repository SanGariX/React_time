import Logo from '../Logo/Logo'
import styles from './Footer.module.css'
import instagram from "../../assets/logo/instagram.svg"
import viber from "../../assets/logo/viber.svg"
import reddit from "../../assets/logo/reddit.svg"
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Logo />
			<div className={styles.center}>
				develop by{' '}
				<a target='_blank' rel='noreferrer' href='https://github.com/SanGariX'>
					SanGariX
				</a>
			</div>
			<div className={styles.socials}>
				<a target='_blank' rel='noreferrer' href='https://www.instagram.com/11_sanua_11/'>
					<img className={styles.instagram} src={instagram}/>
				</a>
				<a target='_blank' rel='noreferrer' href='https://www.reddit.com/user/Radiant_Status_5204/'>
					<img className={styles.reddit} src={reddit}/>
				</a>
				<a target='_blank' rel='noreferrer' href='https://account.viber.com/uk/account'>
					<img className={styles.viber} src={viber}/>
				</a>
			</div>
		</footer>
	)
}

export default Footer
