import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './404';
import { userContext } from '../../context/userContext';

function render404(user) {
    render(
        <BrowserRouter>
            <userContext.Provider value={{ user: user }}>
                <NotFound />
            </userContext.Provider>
        </BrowserRouter>
    );
}

test('renders title - 404, no user', () => {
    render404(null);

    const title = screen.getByText('404');
    expect(title).toBeInTheDocument();
});

test('renders home link, no user', () => {
    render404(null);

    const linkElement = screen.getByRole('link', {
        name: 'Go back to Home page',
    });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
});

test('renders home link, with user', () => {
    render404({ _id: '0000kkk' });

    const linkElement = screen.getByRole('link', {
        name: 'Go back to Home page',
    });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', `/`);
});

test('renders title - 404, with user', () => {
    render404({ _id: '0000kkk' });

    const title = screen.getByText('404');
    expect(title).toBeInTheDocument();
});
