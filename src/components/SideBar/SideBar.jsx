import { NavLink, useParams } from 'react-router-dom'
import styles from './SideBar.module.css'
import { useSelector } from 'react-redux'
import withSkeleton from '../../utils/Hocs/withSkeleton'
import SetTimeout from '../../utils/FragmentCod/SetTimeout'
const SideBar = () => {
	const { id: idParams } = useParams()
	const { data: fetchData } = useSelector((state) => {
		return state.categories
	})

	return (
		<>
			<aside className={`content ${SetTimeout(fetchData) && 'loaded'} ${styles.sidebar} `}>
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
		</>
	)
}
const WithSkeletonComponent = withSkeleton(SideBar)
export default WithSkeletonComponent
