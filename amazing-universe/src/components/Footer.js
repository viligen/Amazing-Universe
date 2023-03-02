export default function Footer() {
    return (
        <footer>
            <h1>Amazing Universe</h1>
            <section className='footer-flex'>
                <ul role='list'>
                    <li>
                        <a href=''>Contacts</a>
                    </li>
                    <li>
                        <a href=''>E-mail</a>
                    </li>
                    <li>
                        <a href=''>Log Out</a>
                    </li>
                    <li>
                        <a href=''>Phone</a>
                    </li>
                </ul>
                <ul role='list'>
                    <li>
                        <a href=''>About us</a>
                    </li>
                    <li>
                        <a href=''>FAQ</a>
                    </li>
                    <li>
                        <a href=''>Terms and conditions</a>
                    </li>
                    <li>
                        <a href=''>Contact</a>
                    </li>
                </ul>
                <ul role='list' className='icons'>
                    <li>
                        <a href=''>Follow us on</a>
                    </li>
                    <div className='icons-row'>
                        <li>
                            <a href=''>
                                <i className='fab fa-instagram'></i>
                            </a>
                        </li>
                        <li>
                            <a href=''>
                                <i className='fab fa-facebook-f'></i>
                            </a>
                        </li>
                        <li>
                            <a href=''>
                                <i className='fab fa-twitter'></i>
                            </a>
                        </li>
                    </div>
                </ul>
            </section>
        </footer>
    );
}
