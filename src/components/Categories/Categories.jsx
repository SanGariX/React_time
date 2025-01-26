import { Link } from 'react-router-dom'
import styles from './Categories.module.css'
import withSkeleton from '../../utils/Hocs/withSkeleton'
import SetTimeout from '../../utils/FragmentCod/SetTimeout'
const Categories = ({ title, products = [], amount }) => {
	const list = products.filter((_, i) => i < amount)
	return (
		<section className={`content ${SetTimeout() && 'loaded'} ${styles.section}`}>
			<h2 className={styles.title}>{title}</h2>
			<ul className={styles.list}>
				{list.map(({ id, image, name }) => (
					<li key={id} className={styles.list_item}>
						<Link to={`/category/${id}`}>
							<div className={styles.image_box}>
								<img className={styles.image} src={image} />
							</div>
							<h3 className={styles.title_wrapper}>{name}</h3>
						</Link>
					</li>
				))}
			</ul>
		</section>
	)
}
const WithSkeletonComponent = withSkeleton(Categories)
export default WithSkeletonComponent
