import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../Redux/Profile-Reducer";
import {useEffect} from "react";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


function ProfileContainer(props) {
    let {userId} = useParams();
    if (!userId) {
        userId = props.authorizedUserId;
        /*if (!userId) {
            props.history.replace('/login');
        }*/
    };

    useEffect(() => {

        props.getUserProfile(userId);
        props.getStatus(userId)
    }, [userId]);

    return (
        <div>
            <Profile {...props}
                     profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}/>
        </div>
    );
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withAuthRedirect
)(ProfileContainer);

