import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./post-full-item.css";

const PostFullItem = (
    {
        post = {
            "_id": 123,
            "name": "Jolly Cat",
            "verified": true,
            "time_since": "23h",
            "profile_image": "jollycat.jpeg",
            "text": "I'm a cat lol rofl haha.",
            "image": "jollycat.jpeg",
            "replies": 123,
            "retweets": 456,
            "likes": 789
        }
    }
) => {
    return (
        <div className="row">
            <div className="col-2 col-md-1">
                <img className="rounded-circle" height={40} width={40} src={`/tuiter/images/${post.profile_image}`} />
            </div>
            <div className="col-10 col-md-11">
                <span className="fw-bold">{post.name} </span>
                <span className="fa fa-circle-check"></span>
                <span className="text-secondary"> @{post.handle}</span>
                <span className="text-secondary"> • {post.time_since}</span>
                <Link className="wd-no-link-decor" to="#"><span className="float-end text-secondary fa fa-ellipsis"></span></Link>
                <div>
                    <span>{post.text}</span>
                </div>
                <div>
                    <img className="rounded wd-image mt-3" src={`/tuiter/images/${post.image}`} />
                </div>
                <div className="mt-2 mb-2 row">
                    <div className="col-3">
                        <Link className="text-secondary wd-link" to="#">
                            <FontAwesomeIcon icon="fa-regular fa-comment" />
                            <span className="ms-sm-1 ms-md-3">{post.replies}</span>
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link className="text-secondary wd-link" to="#">
                            <FontAwesomeIcon icon="fa-solid fa-retweet" />
                            <span className="ms-sm-1 ms-md-3">{post.retweets}</span>
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link className="text-secondary wd-link" to="#">
                            <FontAwesomeIcon icon="fa-regular fa-heart" />
                            <span className="ms-sm-1 ms-md-3">{post.likes}</span>
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link className="text-secondary wd-link" to="#">
                            <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostFullItem;