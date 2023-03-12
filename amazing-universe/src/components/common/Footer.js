export default function Footer() {
    return (
        <footer>
            <h1>Amazing Universe</h1>
            <section className='footer-flex'>
                <ul className='list'>
                    <li>
                        <b>Contacts</b>
                    </li>
                    <li>
                        <a
                            href='https://gmail.com'
                            target='_blank'
                            rel='noreferrer'
                        >
                            viligen@gmail.com
                        </a>
                    </li>

                    <li>
                        <a
                            href='https://softuni.bg'
                            target='_blank'
                            rel='noreferrer'
                        >
                            SoftUni @viligen
                        </a>
                    </li>
                </ul>
                <ul className='list'>
                    <li>
                        <b>Links</b>
                    </li>
                    <li>
                        <a
                            href='https://pixabay.com/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Pixabay
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://www.nasa.gov/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            NASA
                        </a>
                    </li>
                </ul>
                <ul className='list icons'>
                    <li>Follow me on</li>
                    <div className='icons-row'>
                        <li>
                            <a
                                href='https://github.com/viligen/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <i className='fab fa-github-square'></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://www.linkedin.com/in/velina-genova-a1726a37'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <i className='fab fa-linkedin'></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://www.instagram.com/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <i className='fab fa-instagram'></i>
                            </a>
                        </li>
                    </div>
                </ul>
            </section>
        </footer>
    );
}
