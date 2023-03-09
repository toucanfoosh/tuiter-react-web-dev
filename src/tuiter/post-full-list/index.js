import React from "react";
import postsArray from './posts.json';
import PostFullItem
    from "./post-full-item";

const PostFullList = () => {
    return (
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostFullItem
                        key={post._id} post={post} />)
            }
        </ul>
    );
};
export default PostFullList;