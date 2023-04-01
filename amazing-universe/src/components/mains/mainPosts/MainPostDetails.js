import PostDetails from '../../posts/details/PostDetails';

import styles from '../Mains.module.css';

export default function MainDetails() {
    return (
        <main>
            <section className={styles.section}>
                <h3>Post Details</h3>
                <PostDetails />
            </section>
        </main>
    );
}
