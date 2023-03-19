import './App.css';
import { Routes, Route } from 'react-router-dom';
import { userContext } from './context/userContext';
import { useState, useEffect } from 'react';

import Footer from './components/common/footer/Footer';
import Header from './components/common/header/Header';
import Main from './components/mains/mainPosts/Main';
import MainCreatePost from './components/mains/mainPosts/MainCreatePost';
import MainDashboard from './components/mains/mainPosts/MainDashboard';
import MainPostDetails from './components/mains/mainPosts/MainPostDetails';

import LogoutUser from './components/logoutUser/LogoutUser';
import NotFound from './components/404/404';
import MainMyPosts from './components/mains/mainUser/MainMyPosts';

import DeletePost from './components/posts/DeletePost';
import LikePost from './components/posts/LikePost';
import MainEditPost from './components/mains/mainPosts/MainEditPost';
import MainLogin from './components/mains/mainUser/MainLogin';
import MainRegister from './components/mains/mainUser/MainRegister';

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
