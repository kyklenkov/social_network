import logo from './logo.svg';
import './App.css';
// import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";

import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";

import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React, {Component} from "react";
import {connect, Provider} from "react-redux";
import {getAuthUserData, logout} from "./components/Redux/auth-reducer";
import {compose} from "redux";
import {initializeApp} from "./components/Redux/app-reducer";
import Preloader from "./components/common/Preloader";
import store from "./components/Redux/Redux-store";
import {lazy} from "react";
import {Suspense} from "react";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            // <BrowserRouter> Убрал специально!!! Дублирует Арр в Index.js
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Suspense>
                        <Routes>
                            <Route path='/profile/:userId?' //element={<ProfileContainer />}/>
                                   element={<ProfileContainer/>} />

                            <Route path='/dialogs'
                                   element={<DialogsContainer/>}/>

                            <Route path='/users'
                                   element={<UsersContainer/>}/>

                            <Route path='/login'
                                   element={<Login/>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
            // </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;
