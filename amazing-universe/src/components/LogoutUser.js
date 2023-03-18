import { useEffect, useContext } from 'react';
import { userContext } from '../context/userContext';
import { Navigate } from 'react-router-dom';
import { logoutUser } from '../services/userServices';

export default function LogoutUser() {
    const { onUserChange } = useContext(userContext);
    // const navigate = useNavigate();

    useEffect(() => {
        logoutUser();
        sessionStorage.removeItem('user');

        // navigate('/', { replace: true });
    }, []);
    onUserChange(null);
    // navigate('/', { replace: true });
    return <Navigate to='/' replace />;
}
