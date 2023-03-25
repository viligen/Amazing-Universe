import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
import { userContext } from '../../../context/userContext';
import { useContext } from 'react';

export default function Nav(props) {
    const { user } = useContext(userContext);

    return (
        <nav>
            <ul className='list'>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? styles.active : ''
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/dashboard'
                        className={({ isActive }) =>
                            isActive ? styles.active : ''
                        }
                    >
                        Dashboard
                    </NavLink>
                </li>
                {user && (
                    <>
                        <li>
                            <NavLink
                                to='/myposts'
                                className={({ isActive }) =>
                                    isActive ? styles.active : ''
                                }
                            >
                                My Posts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/logout'
                                className={({ isActive }) =>
                                    isActive ? styles.active : ''
                                }
                            >
                                Log Out
                            </NavLink>
                        </li>
                    </>
                )}

                {!user && (
                    <>
                        <li>
                            <NavLink
                                to='/register'
                                className={({ isActive }) =>
                                    isActive ? styles.active : ''
                                }
                            >
                                Register
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/login'
                                className={({ isActive }) =>
                                    isActive ? styles.active : ''
                                }
                            >
                                Log In
                            </NavLink>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}
