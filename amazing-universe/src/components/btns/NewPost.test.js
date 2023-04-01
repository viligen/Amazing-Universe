import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NewPostBtn from './NewPostBtn';
import { userContext } from '../../context/userContext';

function renderBtn(user) {
    render(
        <BrowserRouter>
            <userContext.Provider value={{ user: user }}>
                <NewPostBtn/>
            </userContext.Provider>
        </BrowserRouter>
    );
}

test('renders login link instead of create one, no user', () => {
    renderBtn(null);

    const linkElement = screen.getByRole('link', { name: 'New Post' });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/login');
});

test('renders create link instead of login, with user', () => {
    renderBtn({ _id: '0000kkk' });

    const linkElement = screen.getByRole('link', { name: 'New Post' });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', `/posts/create`);
});
