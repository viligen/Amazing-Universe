import { useState, useEffect } from 'react';
import {
    getAllPosts,
    getLimitedPosts,
    getMyPosts,
} from '../../../services/postServices';
import PostArticle from '../article/PostArticle';
import SearchForm from '../../forms/search/SearchForm';
import ClipLoader from 'react-spinners/ClipLoader';
import { override } from '../../../utils/spinnerCssOverride';

import styles from './PostsList.module.css';

export default function PostsList({ count, owner }) {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(true);

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
                setIsLoading(false);
            });
        } else if (owner) {
            getMyPosts(owner).then((postsData) => {
                setPosts(postsData);
                setIsLoading(false);
            });
        } else {
            getAllPosts().then((postsData) => {
                setPosts(postsData);
                setIsLoading(false);
            });
        }
    }, [count, owner]);

    if (isLoading) {
        return (
            <>
                <ClipLoader
                    color={'orange'}
                    loading={true}
                    cssOverride={override}
                    size={150}
                    aria-label='Loading Spinner'
                    data-testid='loader'
                />
                <p className={styles.loading}>
                    <b>Loading posts...</b>
                </p>
            </>
        );
    } else {
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
}
