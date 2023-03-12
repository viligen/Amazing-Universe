import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { deletePost } from '../../services/postServices';

export default function DeletePost() {
    const { postId } = useParams();
    useEffect(() => {
        if (postId) {
            alert('You are about to delete this post. Please, confirm!');
            deletePost(postId).then((result) => console.log());
        }
    }, [postId]);

    return <Navigate to='/dashboard' replace />;
}
