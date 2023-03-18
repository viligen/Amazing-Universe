import './App.css';
import { Routes, Route } from 'react-router-dom';
import { userContext } from './context/userContext';
import { useState, useEffect } from 'react';

import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Main from './components/mains/Main';
import MainCreatePost from './components/mains/MainCreatePost';
import MainDashboard from './components/mains/MainDashboard';
import MainPostDetails from './components/mains/MainPostDetails';

import LogoutUser from './components/LogoutUser';
import NotFound from './components/404';
import MainMyPosts from './components/mains/MainMyPosts';

import DeletePost from './components/posts/DeletePost';
import LikePost from './components/posts/LikePost';
import MainEditPost from './components/mains/MainEditPost';
import MainLogin from './components/mains/MainLogin';
import MainRegister from './components/mains/MainRegister';

function App() {
    const [user, setCurrentUser] = useState(sessionStorage.getItem('user'));
    const onUserChange = (newUser) => {
        setCurrentUser(newUser);
    };

    useEffect(() => {
        // console.log(currentUser, sessionUser);
    }, [user]);
    return (
        <userContext.Provider value={{ user, onUserChange }}>
            <div className='App'>
                <Header />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/dashboard' element={<MainDashboard />} />
                    <Route path='/register' element={<MainRegister />} />
                    <Route path='/login' element={<MainLogin />} />

                    <Route path='/logout' element={<LogoutUser />} />
                    <Route path='/myposts' element={<MainMyPosts />} />

                    <Route path='/posts/create' element={<MainCreatePost />} />
                    <Route
                        path='/posts/:postId'
                        element={<MainPostDetails />}
                    />
                    <Route
                        path='/posts/:postId/edit'
                        element={<MainEditPost />}
                    />
                    <Route
                        path='/posts/:postId/delete'
                        element={<DeletePost />}
                    />
                    <Route path='/posts/:postId/like' element={<LikePost />} />

                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </userContext.Provider>
    );
}

export default App;
