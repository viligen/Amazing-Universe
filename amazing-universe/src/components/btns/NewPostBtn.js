import { Link } from 'react-router-dom';

export default function NewPostBtn() {
    const user = sessionStorage.getItem('user');

    return (
        <Link to={user ? '/posts/create' : '/login'} className='postBtn'>
            New Post
        </Link>
    );
}
