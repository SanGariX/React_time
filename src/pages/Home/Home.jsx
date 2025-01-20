import { useSelector } from 'react-redux'
import Post from '../../components/Post/Post'
import Products from '../../components/Products/Products'
import SideBar from '../../components/SideBar/SideBar'
import styles from './Home.module.css'
import SkeletonError from '../../components/Skeleton/SkeletonError'
import SkeletonPending from '../../components/Skeleton/SkeletonPending'
const Home = () => {
    const {list, status} = useSelector((state)=>{
        return state.products
    })
	return (
		<main className={styles.main}>
		    <div className={styles['wrapper-bottom_header']}>
    			<SideBar />
    			<Post />
    		</div>
            {status === "pending" ? <SkeletonPending/> : status === "error" ? <SkeletonError/> : <Products products={list} amount={5} title={"Trending"}/>}
		</main>

	)
}

export default Home
