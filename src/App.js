import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = () => {

    return (
        // <BrowserRouter> Убрал специально!!! Дублирует Арр в Index.js
        <div className='app-wrapper'>
            {/*<HeaderContainer />*/}
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile/:userId?' //element={<ProfileContainer />}/>
                           element={<ProfileContainer />}/>

                    <Route path='/dialogs'
                           element={<DialogsContainer />}/>

                    <Route path='/users'
                           element={<UsersContainer />}/>

                    {/*<Route path='/login'
                           element={<Login />}/>*/}
                </Routes>
            </div>
        </div>
        // </BrowserRouter>
    )

    /*return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile store = {props.store} />}/>
                        <Route path='/dialogs/!*' element={<DialogsContainer store={props.store}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )*/

}

export default App;
