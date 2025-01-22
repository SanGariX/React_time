import { Link } from 'react-router-dom'
import styles from './Products.module.css'
import { useSelector } from 'react-redux'
import { filterImg } from '../../utils/FragmentCod/ImageRec'
const Products = ({ title, products = [], amount, style = {} }) => {
	const { data } = useSelector((state) => {
		return state.categories
	})
	const list = products.filter((_, i) => i < amount)

	const categoriesClickLink = (nameCat) => {
		for (const {name, id} of data) {
			if (name === nameCat) {
				return id
			}
		}
	}
	return (
		<section className={styles.products} style={style}>
			{title && <h2 className={styles.title}>{title}</h2>}
			<div className={styles.list}>
				{list.length &&
					list.map(({ id, images, title, category: { name: cat }, price }) => (
						<div key={id} className={styles.product}>
							<Link to={`/products/${id}`}>
								<div className={styles.image_box}>
									<img className={styles.image} src={filterImg(images[0])} />
								</div>
								<h3 className={styles.title_wrapper}>{title}</h3>
							</Link>
							<Link to={`/category/${categoriesClickLink(cat)}`}>
								<p className={styles.cat}>{cat}</p>
							</Link>
							<div className={styles.info}>
								<div className={styles.prices}>
									<p className={styles.oldPrice}>{Math.floor(price * 0.8)}$</p>
									<span> / </span>
									<p className={styles.price}>{price}$</p>
								</div>
								<div className={styles.purchases}>
									purchases {Math.floor(Math.random() * 100 + 100)}
								</div>
							</div>
						</div>
					))}
			</div>
		</section>
	)
}

export default Products
