import './App.css';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Main from './components/mains/Main';
import MainCreatePost from './components/mains/MainCreatePost';
import MainDashboard from './components/mains/MainDashboard';
import MainPostDetails from './components/mains/MainPostDetails';
import RegisterUserForm from './components/forms/RegisterUserForm';
import LoginUserForm from './components/forms/LoginUserForm';
import LogoutUser from './components/LogoutUser';
import NotFound from './components/404';
import MainMyPosts from './components/mains/MainMyPosts';
import EditPostForm from './components/forms/EditPostForm';
import DeletePost from './components/posts/DeletePost';
import LikePost from './components/posts/LikePost';
// import { userContext} from './context/userContext';
// import { useState } from 'react';

function App() {
    // const [ctxUser, setCtxuser] = useState();
    // let user = userContext
    // setCtxuser(user)

    return (
        // <userContext.Provider value={ctxUser}>
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/dashboard' element={<MainDashboard />} />
                <Route path='/register' element={<RegisterUserForm />} />
                <Route path='/login' element={<LoginUserForm />} />

                <Route path='/logout' element={<LogoutUser />} />
                <Route path='/myposts' element={<MainMyPosts />} />

                <Route path='/posts/create' element={<MainCreatePost />} />
                <Route path='/posts/:postId' element={<MainPostDetails />}>
                    <Route path='edit' element={<EditPostForm />} />
                    <Route path='delete' element={<DeletePost />} />
                    <Route path='like' element={<LikePost />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
        // </userContext.Provider>
    );
}

export default App;
