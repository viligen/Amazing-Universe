import HeroInfo from './HeroInfo';
import Nav from './Nav';

export default function Header() {
    return (
        <header>
            <img src='header.jpg' alt='hero' />
            <div className='hero'>
                <h1>Amazing Universe</h1>
                <Nav />
            </div>
            <HeroInfo />
        </header>
    );
}
