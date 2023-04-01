import CreatePostForm from '../../forms/postForms/CreatePostForm';

import styles from '../Mains.module.css'

export default function MainCreatePost() {
    return (
        <main>
            <section className={styles.section}>
                <h3>Create a New Post</h3>
                <CreatePostForm />
            </section>
        </main>
    );
}
