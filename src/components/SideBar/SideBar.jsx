import { NavLink } from 'react-router-dom'
import styles from './SideBar.module.css'
import { useSelector } from 'react-redux'
import withSkeleton from '../../utils/Hocs/withSkeleton'
import SetTimeout from '../../utils/FragmentCod/SetTimeout'
import { useState } from 'react'
const SideBar = ({id:idParams = null}) => {
	const [btnClick, setBtnClick] = useState(false)
	
	const { data: fetchData } = useSelector((state) => {
		return state.categories
	})
	const handleClick = () => {
		if (btnClick) {
			setBtnClick(false)
		} else {
			setBtnClick(true)
		}
	}
	return (
		<>
			<aside
				className={`content ${SetTimeout() && 'loaded'} ${
					btnClick ? styles.activate : ''
				} ${styles.sidebar} `}
			>
				<h4 className={styles.title}>CATEGORIES</h4>
				<nav className={styles.nav}>
					<nav className={styles['navigation-categories']}>
						<ul className={styles.menu}>
							{fetchData?.map(({ id, name }) => (
								<li key={id} className={styles['menu-item']}>
									<NavLink
										className={
											id === Number(idParams) ? styles['active-categories'] : ''
										}
										to={`/category/${id}`}
									>
										{name}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>
				</nav>
				<footer className={styles.footer}>
					<a href='/help' target='_blank' className={styles.link}>
						Help
					</a>
					<a href='/terms' target='_blank' className={styles.link}>
						Terms & Conditions
					</a>
				</footer>
			</aside>
			<button
				onClick={() => {
					handleClick()
				}}
				className={styles.btn_wrap}
			>
				{'>'}
			</button>
		</>
	)
}
const WithSkeletonComponent = withSkeleton(SideBar)
export default WithSkeletonComponent
