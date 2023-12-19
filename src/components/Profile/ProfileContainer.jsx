import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../Redux/Profile-Reducer";
import {useEffect} from "react";
import {Navigate, useNavigate, useParams} from "react-router-dom";


function ProfileContainer(props) {
    let {userId} = useParams();
    if (!userId) {
        userId = 2;
    };

    useEffect(() => {
        props.getUserProfile(userId);
    }, [userId]);

    if (!props.isAuth) return <Navigate to={'/login'} />;

    return (
        <div>
            <Profile profile={props.profile} />
        </div>
    );
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {getUserProfile})(ProfileContainer);