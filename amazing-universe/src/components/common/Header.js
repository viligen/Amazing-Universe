import HeroInfo from './HeroInfo';
import Nav from './Nav';
import { useLocation } from 'react-router-dom';

export default function Header() {
    let currentLocation = useLocation();

    return (
        <header>
            <img src='header.jpg' alt='hero' />
            <div className='hero'>
                <h1>Amazing Universe</h1>
                <Nav />
            </div>
            {currentLocation.pathname === '/' ? <HeroInfo /> : ''}
        </header>
    );
}
