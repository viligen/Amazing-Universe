import PostArticle from './PostArticle';
import { useState, useEffect } from 'react';

export default function PostArticlesList() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/data/posts.json`)
            .then((resp) => resp.json())
            .then((postsData) => {
                setPosts(postsData.posts);
            });
    }, []);

    return (
        <div className='card-grid'>
            {posts
                .sort((a, b) => b.id - a.id)
                .slice(0, 3)
                .map((p) => (
                    <PostArticle key={p.id} post={p} />
                ))}
        </div>
    );
}
