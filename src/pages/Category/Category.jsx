import { useParams } from 'react-router-dom'
import SideBar from '../../components/SideBar/SideBar'
import styles from './Category.module.css'
import SingleCategory from './Components/SingleCategory'
import FilterProduct from './Components/filterProduct'
import Post from '../../components/Post/Post'
const Category = () => {
	const { id: idParams } = useParams()
	return (
		<div className={styles.wrapper}>
			<SideBar id={idParams} />
			<Post />
			<main className={styles.main}>
				<FilterProduct />
				<SingleCategory />
			</main>
		</div>
	)
}

export default Category
