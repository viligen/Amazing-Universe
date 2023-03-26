import { useEffect, useContext } from 'react';
import { userContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../services/userServices';
import { removeLastSeen } from '../../utils/lastSeenHelper';

export default function LogoutUser() {
    const { onUserChange } = useContext(userContext);
    const navigate = useNavigate();
    // const navigate = useNavigate();

    useEffect(() => {
        logoutUser();
        sessionStorage.removeItem('user');
        removeLastSeen();
        onUserChange(null);
        navigate('/', { replace: true });
    }, [navigate, onUserChange]);
}
