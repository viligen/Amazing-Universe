import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { actionLike } from '../../services/likeServices';

export default function LikePost() {
    const { postId } = useParams();
    useEffect(() => {
        if (postId) {
            actionLike(postId).then((result) => console.log(result));
        }
    }, [postId]);

    return <Navigate to={`/posts/${postId}`} replace />;
}
