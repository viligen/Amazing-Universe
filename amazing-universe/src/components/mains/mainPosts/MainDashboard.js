import NewPostBtn from '../../btns/NewPostBtn';
import PostsList from '../../posts/list/PostsList';
import styles from '../Mains.module.css';


export default function MainDashboard() {
    return (
        <main>
            <section className={styles.section}>
                <h3>Posts Dashboard</h3>
                <NewPostBtn />

                <PostsList count={null} owner={null} />
            </section>
        </main>
    );
}
