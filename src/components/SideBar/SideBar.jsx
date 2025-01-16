// import { NavLink } from 'react-router-dom'
import styles from './SideBar.module.css'
import { useSelector } from 'react-redux'
const SideBar = () => {
    // const dispatch = useDispatch()
    const changeSlice = useSelector((state)=>{
        return state.categories.sliceKey
    })
    console.log(changeSlice)
	return (
		<>
			<aside className={styles.sidebar}>
				<h4 className={styles.title}>CAREGORIES</h4>
				<nav className={styles.nav}>
					<nav className={styles['navigation-categories']}>
						<ul className={styles.menu}>
							<li className={styles['menu-item']}>
								{/* <NavLink to={`/category/${id}`}>Link</NavLink> */}
							</li>
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
