import NewPostBtn from '../../btns/NewPostBtn';
import PostsList from '../../posts/list/PostsList';

import styles from '../Mains.module.css'

export default function MainMyPosts() {
    let ownerId = JSON.parse(sessionStorage.getItem('user'))._id || null;
    return (
        <main>
            <section className = {styles.section}>
                <h3>My Posts</h3>
                <NewPostBtn />
                <PostsList count={null} owner={ownerId} />
            </section>
        </main>
    );
}
