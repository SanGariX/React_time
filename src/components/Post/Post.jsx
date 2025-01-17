import styles from './Post.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import slider1 from '../../assets/Post/slider1.jpg'
import slider2 from '../../assets/Post/slider2.jpg'
import slider3 from '../../assets/Post/slider3.jpg'
const Post = () => {
	const imageSlider = [slider1, slider2, slider3]
	return (
		<section className={styles.home}>
			<div className={styles.products}>
				<Swiper
					modules={[Navigation]}
                    spaceBetween={10}
					slidesPerView={1}
					navigation
                    className={styles.swipering}
				>
					{imageSlider.map((item, idx) => (
						<SwiperSlide className={styles.swiperisSlide} key={idx} style={{ width: 'auto' }}>
							<img className={styles.image} src={item} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default Post
