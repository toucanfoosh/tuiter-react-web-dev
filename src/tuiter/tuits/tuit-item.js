import React from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import TuitStats from "./tuit-stats";
import { deleteTuitThunk } from "../../services/tuits-thunks";
import { Link } from "react-router-dom";

const TuitItem = ({ key, post }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <li key={key} className="list-group-item">
            <div className="row">
                <div className="col-2 col-md-1">
                    <img className="rounded-circle" height={40} width={40} src={`/tuiter/images/${post.image}`} />
                </div>
                <div className="col-10 col-md-11">
                    <i className="bi bi-x-lg float-end"
                        onClick={() => deleteTuitHandler(post._id)}></i>
                    <span className="fw-bold">{post.userName} </span>
                    <span className="fa fa-circle-check"></span>
                    <span className="text-secondary"> {post.handle}</span>
                    <span className="text-secondary"> • {post.time}</span>
                    <Link className="wd-no-link-decor" to="#"><span className="float-end text-secondary fa fa-ellipsis"></span></Link>
                    <div>
                        <span>{post.tuit}</span>
                    </div>
                    <TuitStats stats={post} />
                </div>
            </div>
        </li>
    )
};

export default TuitItem;