import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { userContext } from '../../context/userContext';

export default function OwnershipRequired() {
    const { state } = useLocation();
    const { user } = useContext(userContext);
    const ownerId = state ? state.ownerId : '';
    const authUserId = user ? JSON.parse(user)._id : '';

    // console.log(authUserId, ownerId);
    if (authUserId && ownerId === authUserId) {
        return <Outlet />;
    } else {
        return <Navigate to='/' replace />;
    }
}
