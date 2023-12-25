import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../Redux/Profile-Reducer";
import {useEffect} from "react";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


function ProfileContainer(props) {
    let {userId} = useParams();
    if (!userId) {
        userId = 2;
    };

    useEffect(() => {
        props.getUserProfile(userId);
    }, [userId]);

    return (
        <div>
            <Profile profile={props.profile} />
        </div>
    );
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withAuthRedirect
)(ProfileContainer);


/*
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);*/


/*

export default connect(mapStateToProps, {getUserProfile})(AuthRedirectComponent);*/
