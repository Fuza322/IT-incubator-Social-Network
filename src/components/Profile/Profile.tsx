import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img src='https://cdn.wpbeaveraddons.com/wp-content/uploads/luca-micheli-422052-unsplash-2.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;