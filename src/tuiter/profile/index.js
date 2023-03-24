import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";

function hasLastName(name) {
    return typeof name === 'undefined' ? "" : name;
}

const ProfileComponent = () => {
    const user = useSelector(state => state.user)
    console.log(user);
    return (
        <div>
            <div className="row side-border">
                <div className="mt-2 col-1">
                    <Link to="/tuiter/home"><i className="text-black fa-solid fa-arrow-left"></i></Link>
                </div>
                <div className="col-11">
                    <div><span className="text-bold"> {user.firstName} {hasLastName(user.lastName)} </span></div>
                    <div> {user.numTuits} Tuits </div>
                </div>
                <img className="p-0 mt-2 img-fluid wd-banner" src={`./images/${user.bannerPicture}`} />
                <div className="mb-2 row">
                    <div className="col-9">
                        <img className="p-0 mt-2 img-fluid rounded-circle wd-profile" src={`./images/${user.profilePicture}`} />
                    </div>
                    <div className="mt-2 col-3 text-right">
                        <Link to="/tuiter/edit-profile" className="btn btn-outline-secondary rounded-pill">Edit Profile</Link>
                    </div>
                </div>
                <div className="margin-top-big row">
                    <div className="text-bold font-size-50">{`${user.firstName} ${hasLastName(user.lastName)}`}</div>
                    <div className="text-secondary">@{user.handle}</div>
                    <div className="mt-3">{user.bio}</div>

                </div>
                <div className="mt-2 row">
                    <span className="col-3">
                        <i className="fa-solid fa-location-dot"></i>
                        <span> {user.location}</span>
                    </span>
                    <span className="col-4">
                        <i className="fa-solid fa-cake-candles"></i>
                        <span> Born {user.dateOfBirth}</span>
                    </span>
                    <span className="col-3">
                        <i class="fa-solid fa-calendar"></i>
                        <span> Joined {user.dateJoined}</span>
                    </span>
                </div>
                <div className="mt-2 row">
                    <div className="col-3">
                        <span className="text-bold">{user.followingCount}</span>
                        <span> Following</span>
                    </div>
                    <div className="col-3">
                        <span className="text-bold">{user.followersCount}</span>
                        <span> Followers</span>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default ProfileComponent;