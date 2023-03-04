export default function PostArticle(post) {
    return (
        <article className='card'>
            <img src={post.post.imageUrl} alt='img' />
            <h4>{post.post.title}</h4>
            <p>{post.post.description}</p>
            <button>Reveal More</button>
        </article>
    );
}
