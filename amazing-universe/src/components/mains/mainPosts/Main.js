import NewPostBtn from '../../btns/NewPostBtn';
import styles from '../Mains.module.css';

import PostsList from '../../posts/list/PostsList';

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
