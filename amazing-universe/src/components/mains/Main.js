import NewPostBtn from '../btns/NewPostBtn';
import PostsList from '../posts/PostsList';

export default function Main() {
    return (
        <main>
            <section>
                <h3>Most Recent Posts</h3>
                <NewPostBtn />
                <PostsList count={2} />
            </section>
        </main>
    );
}
