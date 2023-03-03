
import NewPostBtn from './NewPostBtn';
import PostArticlesList from './PostArticlesList';

export default function Main() {

    return (
        <main>
            <section>
                <h3>Most Recent Posts</h3>
                <NewPostBtn/>
                <PostArticlesList/>
            </section>
        </main>
    );
}
