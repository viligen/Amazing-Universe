import { Link } from 'react-router-dom';

export default function PostArticle({ post }) {
    return (
        <article className='card'>
            <img src={post.imageUrl} alt='img' />
            <h4>{post.title}</h4>
            <p>{post.description}</p>
            <Link to={`/posts/${post._id}`} className='postBtn'>
                Reveal More
            </Link>
        </article>
    );
}
