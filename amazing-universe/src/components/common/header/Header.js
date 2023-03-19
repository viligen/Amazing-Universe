import HeroInfo from './HeroInfo';
import Nav from '../nav/Nav';
import { useLocation } from 'react-router-dom';

import styles from './Header.module.css';

export default function Header() {
    let currentLocation = useLocation();

    return (
        <header className={styles.header}>
            <img src='header.jpg' alt='hero' />
            <div className='hero'>
                <h1>Amazing Universe</h1>
                <Nav />
            </div>
            {currentLocation.pathname === '/' ? <HeroInfo /> : ''}
        </header>
    );
}
