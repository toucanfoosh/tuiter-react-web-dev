import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import "./index.css";
import { changeUser } from '../reducers/user-reducer';

function hasLastName(name) {
    return typeof name === 'undefined' ? "" : name;
}

const EditProfileComponent = () => {
    const user = useSelector(state => state.user);
    let [currentUser, setCurrentUser] = useState(user);
    const dispatch = useDispatch();
    return (
        <div className="row border rounded">
            <div className="mt-2 row">
                <Link to="/tuiter/profile" className="text-black no-text-decor mt-2 col-1 fa-solid fa-xmark"></Link>
                <span className="mt-1 text-bold col-9">Edit Profile</span>
                <Link onClick={() => { dispatch(changeUser(currentUser)) }} to="/tuiter/profile" className="col-2 btn btn-sm btn-outline-secondary rounded-pill">Save</Link>
            </div>

            <img className="p-0 mt-2 img-fluid wd-banner" src={`./images/${user.bannerPicture}`} />
            <div className="mb-2 row">
                <div className="col-9">
                    <img className="p-1 mt-2 img-fluid wd-profile rounded-circle" src={`./images/${user.profilePicture}`} />
                </div>
            </div>

            <div className="mb-3 margin-top-big row">
                <div className="col-12 form-floating">
                    <textarea onChange={(event) => {
                        const names = event.target.value.split(" ");
                        setCurrentUser({ ...currentUser, firstName: names[0], lastName: names[1] });
                        console.log(currentUser);
                    }} defaultValue={`${user.firstName} ${hasLastName(user.lastName)}`} className="form-control" placeholder="Edit Name" id="floatingTextarea1" rows="50" cols="40"></textarea>
                    <label className="ms-2" for="floatingTextarea1">Name</label>
                </div>

                <div className="col-12 mt-3 form-floating">
                    <textarea onChange={(event) => {
                        setCurrentUser({ ...currentUser, bio: event.target.value })
                        console.log(currentUser);
                    }} defaultValue={`${user.bio}`} className="responsive-height form-control big-text-box " placeholder="Edit Bio" id="floatingTextarea2"></textarea>
                    <label className="ms-2" for="floatingTextarea2">Bio</label>
                </div>

                <div className="col-12 mt-3 form-floating">
                    <textarea onChange={(event) => {
                        setCurrentUser({ ...currentUser, location: event.target.value })
                        console.log(currentUser);
                    }} defaultValue={`${user.location}`} className="form-control" placeholder="Edit Location" id="floatingTextarea3"></textarea>
                    <label className="ms-2" for="floatingTextarea3">Location</label>
                </div>

                <div className="col-12 mt-3 form-floating">
                    <textarea onChange={(event) => {
                        setCurrentUser({ ...currentUser, website: event.target.value })
                        console.log(currentUser);
                    }} defaultValue={`${user.website}`} className="form-control" placeholder="Edit Website" id="floatingTextarea4"></textarea>
                    <label className="ms-2" for="floatingTextarea4">Website</label>
                </div>

                <form className="col-12 mt-3 form-floating">
                    <input onChange={(event) => {
                        setCurrentUser({ ...currentUser, dateOfBirth: event.target.value })
                        console.log(currentUser);
                    }} type="date" defaultValue={user.dateOfBirth} className="form-control" id="floatingInputValue" />
                    <label className="ms-2" for="floatingInputValue">Date of Birth</label>
                </form>

            </div>
        </div>
    );
};

export default EditProfileComponent;