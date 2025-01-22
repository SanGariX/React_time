import styles from './Banner.module.css'
import bannerImg from '../../assets/Post/banner.jpg'
const Banner = () => {
	return (
		<section className={styles.banner}>
			<div className={styles.left}>
				<p className={styles.content}>
					NEW YEAR <span>SELL</span>
				</p>
				<button className={styles.more}>See more</button>
			</div>
			<div className={styles.right} style={{backgroundImage:`url(${bannerImg})`}}>
				<p className={styles.discount}>
					save up to <span>50%</span> off
				</p>
			</div>
		</section>
	)
}

export default Banner
