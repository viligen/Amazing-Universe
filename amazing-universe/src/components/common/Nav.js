export default function Nav(props) {
    return (
        <nav>
            <ul className='list'>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/dashboard'>Dashboard</a>
                </li>
                {sessionStorage.getItem('user') && (
                    <>
                        <li>
                            <a href='myposts'>My Posts</a>
                        </li>
                        <li>
                            <a href='/logout'>Log Out</a>
                        </li>
                    </>
                )}

                {!sessionStorage.getItem('user') && (
                    <>
                        <li>
                            <a href='/register'>Register</a>
                        </li>
                        <li>
                            <a href='/login'>Log In</a>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}
