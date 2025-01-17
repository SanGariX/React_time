import { NavLink } from 'react-router-dom'
import styles from './SideBar.module.css'
import { useSelector } from 'react-redux'
const SideBar = () => {
	const fetchData = useSelector((state) => {
		return state.categories.data
	})
	const localOnClick = (name)=>{
		localStorage.setItem("categories", name)
	}
	const localCategories = localStorage.getItem("categories")
	return (
		<>
			<aside className={styles.sidebar}>
				<h4 className={styles.title}>CATEGORIES</h4>
				<nav className={styles.nav}>
					<nav className={styles['navigation-categories']}>
						<ul className={styles.menu}>
							{!!fetchData &&
								fetchData.map(({ id, name }) => (
									<li key={id} className={styles['menu-item']}>
										<NavLink
											className={localCategories === name ? styles["active-categories"] : ''}
											onClick={()=>{localOnClick(name)}}
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
		</>
	)
}

export default SideBar
