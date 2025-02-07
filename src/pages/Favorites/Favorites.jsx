import styles from './Favorites.module.css'
import SideBar from '../../components/SideBar/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import close from '../../assets/logo/clear.svg'
import { filterImg } from '../../utils/FragmentCod/ImageRec'
import { removeCartAndFav, toggleQuantity } from '../../features/Redux/Slices/userSlice'
const Favorites = () => {
	const dispatch = useDispatch()
	const { favorites } = useSelector((state) => state.user)
	return (
		<div className={styles.wrapper}>
			<SideBar />
			<div className={styles.wrapper_cart}>
				<ul className={styles.cart_list}>
					{!!favorites.length &&
						favorites.map(
							(
								{ id, price, title, quantity, images, category: { name } },
								i
							) => (
								<li key={id} className={styles.cart_list_item}>
									<div className={styles.list_item_box_title}>
										<div className={styles.list_item_img_box}>
											<img
												className={styles.list_item_img}
												src={filterImg(images[0])}
											/>
										</div>
										<div className={styles.list_item_flexbox}>
											<h3 className={styles.list_item_title}>{title}</h3>
											<p className={styles.list_item_text}>{name}</p>
										</div>
									</div>
									<h5 className={styles.list_item_price}>{price}$</h5>
									<div className={styles.list_item_boxprice}>
										<button
											onClick={() => {
												dispatch(
													toggleQuantity({ name: 'favorites', work: false, idx: i })
												)
											}}
											className={styles.list_item_btnprice}
										>
											-
										</button>
										<p className={styles.list_item_pricebtn}>{quantity}</p>
										<button
											onClick={() => {
												dispatch(
													toggleQuantity({ name: 'favorites', work: true, idx: i })
												)
											}}
											className={styles.list_item_btnprice}
										>
											+
										</button>
									</div>
									<button
										onClick={() => {
											dispatch(
												removeCartAndFav({ name: 'favorites', idx: i })
											)
										}}
										className={styles.list_item_close_btn}
									>
										<img className={styles.list_item_close_img} src={close} />
									</button>
								</li>
							)
						)}
				</ul>
			</div>
		</div>
	)
}

export default Favorites
