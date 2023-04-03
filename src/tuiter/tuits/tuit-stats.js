import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';

function isLiked(liked) {
    return (liked ? 'fas' : 'far');
}

function isDisliked(disliked) {
    return (disliked ? 'fas' : 'far');
}

const TuitStats = ({ stats }) => {
    const dispatch = useDispatch();

    const changeLikedClickHandler = (stats) => {
        const updatedLikes = stats.liked ? stats.likes - 1 : stats.likes + 1;
        const updatedStats = { ...stats, likes: updatedLikes, liked: !stats.liked };
        dispatch(updateTuitThunk(updatedStats));
    }
    const changeDislikeClickHandler = (stats) => {
        const updatedDislikes = stats.disliked ? stats.dislikes - 1 : stats.dislikes + 1;
        const updatedStats = { ...stats, dislikes: updatedDislikes, disliked: !stats.disliked };
        dispatch(updateTuitThunk(updatedStats));
    }

    return (
        <div className="mt-2 mb-2 row">
            <div className="col-2">
                <Link className="text-secondary wd-link" to="#">
                    <FontAwesomeIcon icon="fa-regular fa-comment" />
                    <span className="ms-sm-1 ms-md-3">{stats.replies}</span>
                </Link>
            </div>
            <div className="col-2">
                <Link className="text-secondary wd-link" to="#">
                    <FontAwesomeIcon icon="fa-solid fa-retweet" />
                    <span className="ms-sm-1 ms-md-3">{stats.retuits}</span>
                </Link>
            </div>
            <div className="col-2">
                <Link onClick={() => changeLikedClickHandler(stats)} className="text-secondary wd-link" to="#">
                    <FontAwesomeIcon icon={[`${isLiked}`, 'heart']} className={`${stats.liked ? 'wd-liked' : ''}`} />
                    <span className="ms-sm-1 ms-md-3">{stats.likes}</span>
                </Link>
            </div>
            <div className="col-2">
                <Link onClick={() => changeLikedClickHandler(stats)} className="text-secondary wd-link" to="#">
                    <FontAwesomeIcon icon={[`${isDisliked}`, 'heart-crack']} className={`${stats.disliked ? 'wd-disliked' : ''}`} />
                    <span className="ms-sm-1 ms-md-3">{stats.dislikes}</span>
                </Link>
            </div>
            <div className="col-2">
                <Link className="text-secondary wd-link" to="#">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket" />
                </Link>
            </div>
            <div className="col-2" />
        </div>
    );
};

export default TuitStats;
