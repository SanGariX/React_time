import { useParams } from 'react-router-dom'
import SideBar from '../../components/SideBar/SideBar'
import styles from './Category.module.css'
const Category = () => {
	const { id: idParams } = useParams()
	return (
		<div className={styles.wrapper}>
			<SideBar id={idParams}/>
			<main className={styles.main}></main>
		</div>
	)
}

export default Category
