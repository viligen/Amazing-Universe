import { Link } from 'react-router-dom';

export default function NewPostBtn() {
    return (
        <Link to='/posts/create' className='postBtn'>
            New Post
        </Link>
    );
}
