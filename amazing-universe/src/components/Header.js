import Nav from './Nav';
import NewPostBtn from './NewPostBtn';

export default function Header() {
    return (
        <header>
            <img src='header.jpg' alt='hero' />
            <div className='hero'>
                <h1>Amazing Universe</h1>
                <Nav />
            </div>
            <div className='main-info'>
                <h2 className='larger'>
                    Share your favourite<br></br>
                    space photography
                </h2>

                <p>
                    "The universe is a pretty big place. If it's just us, seems
                    like an awful waste of space."
                </p>
                <p>― Carl Sagan, Contact</p>
                <NewPostBtn />
            </div>
        </header>
    );
}
