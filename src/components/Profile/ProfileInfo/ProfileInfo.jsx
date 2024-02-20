import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader";
// import ProfileStatus from './ProfileStatus';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/*<div>
                <img
                    src='https://waterparkworld.ru/wp-content/uploads/2021/05/G51.jpg'/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatus status={'Hello, bitches))'}/>
            </div>
        </div>
    )
}

export default ProfileInfo;