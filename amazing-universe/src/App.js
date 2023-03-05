import './App.css';

import Footer from './components/common/Footer';

import HeaderSmall from './components/common/HeaderSmall';
import Main from './components/mains/Main';

import MainCreatePost from './components/mains/MainCreatePost';
import MainDashboard from './components/mains/MainDashboard';
import MainDetails from './components/mains/MainDetails';

function App() {
    // console.log(posts);
    return (
        <div className='App'>
            {/* <Header /> */}
            <HeaderSmall />
            <MainDashboard />
            <Main />
            {/* <MainCreatePost /> */}
            {/* <CreatePostForm /> */}
            {/* <MainDetails/> */}
            {/* <Main /> */}
            <Footer />
        </div>
    );
}

export default App;
