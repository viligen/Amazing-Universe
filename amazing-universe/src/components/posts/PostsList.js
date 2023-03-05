import PostArticle from './PostArticle';
import { useState, useEffect } from 'react';
import { getAllPosts } from '../../services/postServices';

export default function PostsList({ ...count }) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getAllPosts().then((postsData) => {
            setPosts(postsData);
        });
    }, []);

    return count.count ? (
        <div className='card-grid'>
            {posts.slice(0, count.count).map((p) => (
                <PostArticle key={p._id} post={p} />
            ))}
        </div>
    ) : (
        <div className='card-grid'>
            {posts.map((p) => (
                <PostArticle key={p._id} post={p} />
            ))}
        </div>
    );
}
