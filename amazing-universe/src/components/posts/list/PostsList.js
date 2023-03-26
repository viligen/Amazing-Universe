import PostArticle from '../article/PostArticle';
import { useState, useEffect } from 'react';
import {
    getAllPosts,
    getLimitedPosts,
    getMyPosts,
} from '../../../services/postServices';

import styles from './PostsList.module.css';
import SearchForm from '../../forms/search/SearchForm';

export default function PostsList({ count, owner }) {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        setSearch(data.search);
        // console.log(data.search);
    };

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

    if (search) {
        const filtered = posts.filter(
            (p) =>
                p.title.toLowerCase().includes(search.toLowerCase()) ||
                p.author.toLowerCase().includes(search.toLowerCase())
        );
        return filtered.length !== 0 ? (
            <>
                {!count && <SearchForm onSubmit={onSubmit} />}
                <div className={styles['card-grid']}>
                    {filtered.map((p) => (
                        <PostArticle key={p._id} post={p} />
                    ))}
                </div>
            </>
        ) : (
            <>
                {!count && <SearchForm onSubmit={onSubmit} />}
                <p className={styles.noPosts}>No Posts to Show</p>
            </>
        );
    } else {
        return posts.length !== 0 ? (
            <>
                {!count && <SearchForm onSubmit={onSubmit} />}
                <div className={styles['card-grid']}>
                    {posts.map((p) => (
                        <PostArticle key={p._id} post={p} />
                    ))}
                </div>
            </>
        ) : (
            <>
                {!count && <SearchForm onSubmit={onSubmit} />}
                <p className={styles.noPosts}>No Posts to Show</p>
            </>
        );
    }
}
