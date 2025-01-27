import { Link } from 'react-router-dom'
import styles from './Desc.module.css'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import SetTimeout from '../../utils/FragmentCod/SetTimeout'
import withSkeleton from '../../utils/Hocs/withSkeleton'
import { filterImg } from '../../utils/FragmentCod/ImageRec'
const Desc = ({ data }) => {
	const [currentImg, setCurrentImg] = useState(data)
	useEffect(()=>{
		if(data){
			setCurrentImg(filterImg(data.images[0]))
		}
	}, [data])
	const { data: categoriesData } = useSelector((state) => {
		return state.categories
	})
	const categoriesClickLink = (nameCat) => {
		if (categoriesData?.length) {
			for (const { name, id } of categoriesData) {
				if (name === nameCat) {
					return id
				}
			}
		}
	}
	return (
		<section
			className={`content ${SetTimeout() && 'loaded'} ${styles.product}`}
		>
			<div className={styles.images}>
				<div className={styles.box_main_img}>
					<img src={currentImg} className={styles.image_main} />
				</div>
				<ul className={styles.list_img}>
					{data &&
						data.images.map((item, i) => (
							<li key={i} className={styles.list_item}>
								<img
									onClick={() => {
										setCurrentImg(filterImg(item))
									}}
									src={filterImg(item)}
									className={styles.img_list}
								/>
							</li>
						))}
				</ul>
				<div className={styles.info}>
					<h2 className={styles.title}>{data.title}</h2>
					<p className={styles.price}>
						Price: <span>{data.price}</span>
					</p>
					<p className={styles.desc}>{data.description}</p>
					<p className={styles.category}>
						Category:{' '}
						<span>
							<Link
								to={`/category/${categoriesClickLink(
									data && data.category.name
								)}`}
							>
								{data && data.category.name}
							</Link>
						</span>
					</p>
					<div className={styles.btn_inner}>
						<button className={styles.btn_add}>Add to cart</button>
						<button className={styles.btn_add}>Add to favorites</button>
					</div>
					<div className={styles.inner_link}>
						<Link to={'/'}></Link>
						<Link to={'/category'}></Link>
					</div>
				</div>
			</div>
		</section>
	)
}
const WithSkeletonComponent = withSkeleton(Desc)
export default WithSkeletonComponent
