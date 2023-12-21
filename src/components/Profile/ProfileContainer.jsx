import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../Redux/Profile-Reducer";
import {useEffect} from "react";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {getUserProfile})(AuthRedirectComponent);