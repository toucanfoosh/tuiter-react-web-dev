import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
  return `
        <div class="wd-ma">
            ${posts
              .map((post) => {
                return PostSummaryItem(post);
              })
              .join("")}
        </div>
    `;
};
export default PostSummaryList;