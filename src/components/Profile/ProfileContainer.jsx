import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../Redux/Profile-Reducer";
import {useEffect} from "react";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
/*import {usersAPI} from "../../api/api";*/
import axios from 'axios';



function ProfileContainer(props) {
    let {userId} = useParams();
    if (!userId) {
        userId = 2;
    };

    useEffect(() => {
        // props.getUserProfile(curUserId);

        /*usersAPI.getProfile(curUserId).then((response) => {
            props.setUserProfile(response.data);
        });*/

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then((response) => {
                props.setUserProfile(response.data);
            });
    }, [userId]);

    return (
        // if (!props.isAuth) return <Navigate to='/login'/>
        <div>
            <Profile profile={props.profile} />
        </div>
    );
}

/*let AuthRedirectComponent = withAuthRedirect(ProfileContainer);*/

/*let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})*/
/*
AuthRedirectComponent = connect(mapStateToPropsForRedirect) (AuthRedirectComponent)*/

// let AuthRedirectComponent = connect(withAuthRedirect) (ProfileContainer)

/*let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})*/

/*export default connect(mapStateToProps, {getUserProfile}) (AuthRedirectComponent);*/

// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

/*export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    // withAuthRedirect пока можно закоментить)
)(ProfileContainer);*/

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
    // isAuth: state.auth.isAuth
})

// let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);