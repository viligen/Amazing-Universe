import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../../context/userContext';
import { getTotalLikesPerUser } from '../../../../services/likeServices';
import { getMyPostsCount } from '../../../../services/postServices';
import { getLastSeen } from '../../../../utils/lastSeenHelper';
import SmallPost from '../../../posts/smallCard/SmallPost';
import styles from './MainProfile.module.css';

export default function MainProfile() {
    const { user } = useContext(userContext);
    const userEmail = user ? JSON.parse(user).email : '';
    const userId = user ? JSON.parse(user)._id : '';

    const [ownPostsCount, setPostsCount] = useState(0);
    const [totalLikes, setTotalLikes] = useState(0);
    const [lastSeen, setLastSeen] = useState([]);

    useEffect(() => {
        if (user) {
            getMyPostsCount(userId).then((postData) => {
                setPostsCount(postData);
            });
            getTotalLikesPerUser(userId).then((count) => {
                setTotalLikes(count);
            });
            const last = getLastSeen();
            const sorted_keys = Object.keys(last).sort((a, b) => b - a);
            setLastSeen(sorted_keys.map((key) => last[key]));
        }
    }, [user, userId]);
    return (
        <main>
            <section>
                <h3>My Profile</h3>

                <article className={styles.cardLarge}>
                    <img
                        src='./android-gd4d6c1908_640.png'
                        alt='profile img'
                        className={styles.img}
                    />
                    <h4>Email: {userEmail}</h4>
                    <p>
                        <b>Total Own Posts</b>:{' '}
                        <Link to='/myposts'>{ownPostsCount}</Link>
                    </p>

                    <p>
                        <b>Total Likes</b>: {totalLikes}
                    </p>
                    <Link to='/logout' className='postBtn'>
                        Log Out
                    </Link>
                </article>
            </section>
            <section>
                <h3>Recently Seen Posts</h3>
                <div className={styles.lastSeen}>
                    {lastSeen.length !== 0 ? (
                        lastSeen.map((p) => <SmallPost post={p} key={p._id} />)
                    ) : (
                        <p>No Posts Seen Lately</p>
                    )}
                </div>
            </section>
        </main>
    );
}
