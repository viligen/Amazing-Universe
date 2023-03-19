import NewPostBtn from '../../btns/NewPostBtn';
import PostsList from '../../posts/PostsList';

export default function MainDashboard() {
    return (
        <main>
            <section>
                <h3>Posts Dashboard</h3>
                <NewPostBtn />
                <PostsList count={null} owner={null} />
            </section>
        </main>
    );
}
