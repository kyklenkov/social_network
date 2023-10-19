import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unfollow,
    toggleIsFetching,
    setToggleIsFetching,
    toggleFollowingProgress,
    getUsersThunkCreator, getUsers
} from "../Redux/Users-Reducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`//,
            /*{
                withCredentials: true
            }*/)
        // this.props.getUsers(this.props.currentPage, this.props.pageSize);

        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data =>{
        .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`//,
            /*{
                withCredentials: true
            }*/)
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data =>{
            .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        });
        // this.props.getUsers(pageNumber, this.props.pageSize);
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        // toggleFollowingProgress={this.props.toggleFollowingProgress}
                        // followingProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount, // /100 ЗАГЛУШКА ЧТОБЫ СЕРВЕР САЙТ НЕ ВИС
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        // followingInProgress: state.usersPage.followingInProgress
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setToggleIsFetching: (isFetching) => {
            dispatch(setToggleIsFetching(isFetching))
        }
    }
}*/


/*export default withAuthRedirect(connect(mapStateToProps, {
    follow,
    unfollow,
    /!*setUsers,*!/
    setCurrentPage,
    /!*setTotalUsersCount,*!/
    /!*setToggleIsFetching,*!/
    toggleFollowingProgress,
    getUsers})(UsersAPIComponent));*/

export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, /*toggleFollowingProgress*/})
(UsersContainer);

/*
export default connect(mapStateToProps, {
    follow: followAC,
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    setToggleIsFetching: setToggleIsFetching
})(UsersAPIComponent);*/