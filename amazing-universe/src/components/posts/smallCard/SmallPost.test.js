import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SmallPost from './SmallPost';
import { userContext } from '../../../context/userContext';
const post = {
    title: 'Test Title',
    imageUrl: '/someLink',
    _id: 1,
};
function renderPostArticle(user) {
    render(
        <BrowserRouter>
            <userContext.Provider value={{ user: user }}>
                <SmallPost post={post} />
            </userContext.Provider>
        </BrowserRouter>
    );
}

test('renders title, no user', () => {
    renderPostArticle(null);

    const title = screen.getByText('Test Title');
    expect(title).toBeInTheDocument();
});


test('renders imageUrl, no user', () => {
    renderPostArticle(null);

    const image = screen.getByRole('img');

    expect(image.src !== '').toBeTruthy();
    expect(image).toHaveAttribute('src', '/someLink');
});

test('renders login link instead of details, no user', () => {
    renderPostArticle(null);

    const linkElement = screen.getByRole('link');

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/login');
});

test('renders details link instead of login, with user', () => {
    renderPostArticle({ _id: '0000kkk' });

    const linkElement = screen.getByRole('link');

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', `/posts/${post._id}`);
});

test('renders title, with user', () => {
    renderPostArticle({ _id: '0000kkk' });

    const title = screen.getByText('Test Title');
    expect(title).toBeInTheDocument();
});


test('renders imageUrl, with user', () => {
    renderPostArticle({ _id: '0000kkk' });

    const image = screen.getByRole('img');

    expect(image.src !== '').toBeTruthy();
    expect(image).toHaveAttribute('src', '/someLink');
});
