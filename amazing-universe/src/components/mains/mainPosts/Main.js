import NewPostBtn from '../../btns/NewPostBtn';
import PostsList from '../../posts/list/PostsList';
import styles from '../Mains.module.css';

export default function Main() {
    return (
        <main>
            <section className={styles.section}>
                <h3>Most Recent Posts</h3>
                <NewPostBtn />
                <PostsList count={3} />
            </section>
        </main>
    );
}
