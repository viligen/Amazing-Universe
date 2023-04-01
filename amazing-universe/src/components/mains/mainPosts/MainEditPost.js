import EditPostForm from '../../forms/postForms/EditPostForm';

import styles from '../Mains.module.css'

export default function MainEditPost() {
    return (
        <main>
            <section className={styles.section}>
                <h3>Edit Post</h3>
                <EditPostForm />
            </section>
        </main>
    );
}
