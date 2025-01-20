import { NavLink } from 'react-router-dom'
import styles from './SideBar.module.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import SkeletonPending from '../Skeleton/SkeletonPending'
const SideBar = () => {
	const { data: fetchData, status } = useSelector((state) => {
		return state.categories
	})
	const [categories, setCategories] = useState('')
	return (
		<>
			<aside className={styles.sidebar}>
				<h4 className={styles.title}>CATEGORIES</h4>
				<nav className={styles.nav}>
					<nav className={styles['navigation-categories']}>
						<ul className={styles.menu}>
							{status === 'pending' ? (
								<SkeletonPending />
							) : (
								fetchData.map(({ id, name }) => (
									<li key={id} className={styles['menu-item']}>
										<NavLink
											className={
												categories === name ? styles['active-categories'] : ''
											}
											onClick={() => {
												setCategories(name)
											}}
											to={`/category/${id}`}
										>
											{name}
										</NavLink>
									</li>
								))
							)}
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
		</>
	)
}

export default SideBar
