import posts from "./posts.js";
import PostContentItem from "./PostContentItem.js";

const PostContentList = () => {
  return `
        ${posts
          .map((post) => {
            return PostContentItem(post);
          })
          .join("")}
    `;
};

export default PostContentList;
