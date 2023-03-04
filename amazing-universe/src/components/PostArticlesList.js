import PostArticle from './PostArticle';
import { useState, useEffect } from 'react';
import { requestFunc } from '../api';

export default function PostArticlesList() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        // fetch(`http://localhost:3000/data/posts.json`)
        //     .then((resp) => resp.json())
            requestFunc(`GET`, `/data/posts?sortBy=_createdOn%20desc`)
            .then(
                (postsData) => {
                    setPosts(postsData);
                    console.log(postsData);
                }
            );
    }, []);

    return (
        <div className='card-grid'>
            {posts
                // .sort((a, b) => b.id - a.id)
                .slice(0, 3)
                .map((p) => (
                    <PostArticle key={p._id} post={p} />
                ))}
        </div>
    );
}
