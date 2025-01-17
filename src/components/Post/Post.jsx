import styles from './Post.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import slider1 from '../../assets/Post/slide1.png'
import slider2 from '../../assets/Post/slide2.png'
import slider3 from '../../assets/Post/slide3.png'
const Post = () => {
	const imageSlider = [
		{ img: slider1, title: 'Sel 19% by NOW!', subTitle: 'Black Fride by your fist PC' },
		{ img: slider2, title: 'Sel 51% by NOW!', subTitle: 'Black Fride by your fist PC' },
		{ img: slider3, title: 'Sel 83% by NOW!', subTitle: 'Black Fride by your fist PC' },
	]
	return (
		<section className={styles.home}>
			<div className={styles.products}>
				<Swiper
					modules={[Navigation]}
					spaceBetween={0}
					slidesPerView={1}
					navigation
					className={styles.swipering}
				>
					{imageSlider.map(({img, title, subTitle}, idx) => (
						<SwiperSlide
							className={styles.swiperisSlide}
							key={idx}
							style={{ width: 'auto' }}
						>
							<div className={styles.box_img}> 
								<div className={styles.background}></div>
								<h2 className={styles.slider_title}>{title}</h2>
								<h3 className={styles.slider_subTitle}>{subTitle}</h3>
								<img className={styles.image} src={img} />
								<button className={styles.btn_slider}>By NOW</button>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default Post
