import Post from '../../components/Post/Post';
import SideBar from '../../components/SideBar/SideBar';
import styles from './Home.module.css'
const Home = () => {
    return (
        <div className={styles.wrapper}>
            <SideBar/>
            <main className={styles.main}>
                <Post/>
            </main>
        </div>
    );
}

export default Home;