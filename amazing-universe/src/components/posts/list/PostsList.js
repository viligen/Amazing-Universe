import PostArticle from '../article/PostArticle';
import { useState, useEffect } from 'react';
import { getAllPosts } from '../../../services/postServices';

import styles from './PostsList.module.css';

export default function PostsList({ count, owner }) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getAllPosts().then((postsData) => {
            setPosts(postsData);
        });
    }, []);

    if (count) {
        return (
            <div className={styles['card-grid']}>
                {posts.slice(0, count).map((p) => (
                    <PostArticle key={p._id} post={p} />
                ))}
            </div>
        );
    } else if (owner) {
        return (
            <div className={styles['card-grid']}>
                {posts
                    .filter((p) => p._ownerId === owner)
                    .map((p) => (
                        <PostArticle key={p._id} post={p} />
                    ))}
            </div>
        );
    } else {
        return (
            <div className={styles['card-grid']}>
                {posts.map((p) => (
                    <PostArticle key={p._id} post={p} />
                ))}
            </div>
        );
    }
}
