import NewPostBtn from '../../btns/NewPostBtn';
import PostsList from '../../posts/PostsList';

export default function MainMyPosts() {
    let ownerId = JSON.parse(sessionStorage.getItem('user'))._id || null;
    return (
        <main>
            <section>
                <h3>My Posts</h3>
                <NewPostBtn />
                <PostsList count={null} owner={ownerId} />
            </section>
        </main>
    );
}
