import PostArticle from '../article/PostArticle';
import { useState, useEffect } from 'react';
import {
    getAllPosts,
    getLimitedPosts,
    getMyPosts,
} from '../../../services/postServices';

import styles from './PostsList.module.css';

export default function PostsList({ count, owner }) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        if (count) {
            getLimitedPosts(count).then((postsData) => {
                setPosts(postsData);
            });
        } else if (owner) {
            getMyPosts(owner).then((postsData) => {
                setPosts(postsData);
            });
        } else {
            getAllPosts().then((postsData) => {
                setPosts(postsData);
            });
        }
    }, [count, owner]);

    return (
        <div className={styles['card-grid']}>
            {posts.map((p) => (
                <PostArticle key={p._id} post={p} />
            ))}
        </div>
    );
}
