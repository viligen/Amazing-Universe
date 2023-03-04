export default function Footer() {
    return (
        <footer>
            <h1>Amazing Universe</h1>
            <section className='footer-flex'>
                <ul role='list'>
                    <li>
                        <b>Contacts</b>
                    </li>
                    <li>
                        <a href='https://gmail.com'>viligen@gmail.com</a>
                    </li>

                    <li>
                        <a href='https://softuni.bg'>SoftUni: @viligen</a>
                    </li>
                </ul>
                <ul role='list'>
                    <li>
                        <b>Links</b>
                    </li>
                    <li>
                        <a href='https://pixabay.com/'>Pixabay</a>
                    </li>
                    <li>
                        <a href='https://www.nasa.gov/'>NASA</a>
                    </li>
                </ul>
                <ul role='list' className='icons'>
                    <li>Follow me on</li>
                    <div className='icons-row'>
                        <li>
                            <a href='https://www.instagram.com/'>
                                <i className='fab fa-instagram'></i>
                            </a>
                        </li>
                        <li>
                            <a href='https://github.com/viligen/'>
                                <i className='fab fa-github-square'></i>
                            </a>
                        </li>
                        <li>
                            <a href='https://twitter.com/'>
                                <i className='fab fa-twitter'></i>
                            </a>
                        </li>
                    </div>
                </ul>
            </section>
        </footer>
    );
}
