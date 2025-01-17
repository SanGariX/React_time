import SideBar from '../../components/SideBar/SideBar'
import styles from './Category.module.css'
const Category = () => {
	return (
		<div className={styles.wrapper}>
			<SideBar />
			<main className={styles.main}></main>
		</div>
	)
}

export default Category
