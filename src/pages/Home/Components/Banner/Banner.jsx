import styles from './Banner.module.css'
import bannerImg from '../../../../assets/Post/banner.jpg'
import withSkeleton from '../../../../utils/Hocs/withSkeleton'
import SetTimeout from '../../../../utils/FragmentCod/SetTimeout'
const Banner = () => {
	return (
		<section className={`content ${SetTimeout() && 'loaded'} ${styles.banner}`}>
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
const WithSkeletonComponent = withSkeleton(Banner)
export default WithSkeletonComponent
