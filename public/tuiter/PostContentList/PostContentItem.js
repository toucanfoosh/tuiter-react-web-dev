const PostContentItem = (post) => {
  return `           
  <div class="wd-post">
  <div>
      <img class="wd-profile-picture" src=${post.avatarIcon}>
  </div>
  <div class="wd-post-content">
      <div><span class="wd-nickname">${post.userName}</span>
          <span class="wd-username-date">@${post.handle} • ${post.time}</span>
      </div>
      <div class="wd-tweet-p">
      ${post.postText}
      </div>
      <div class="wd-post-image">
          <img class="wd-image" src=${post.postImage}>
          ${
            post.linkText != ""
              ? `<div class="wd-image-header">
              ${post.linkTitle}
          </div>
          <div class="wd-image-subtext">
              ${post.linkText}
          </div>
          <div class="wd-image-subtext">
              <i class="fa-solid fa-link wd-link-icon"></i><span> ${post.link}</span>
          </div>`
          : ""
        }
      </div>
      <div class="wd-stats">
          <a href="#" class="wd-substat"><i class="fa-regular fa-comment"></i><span
                  class="wd-number">${post.comments}</span></a>
          <a href="#" class="wd-substat"><i class="fa-solid fa-retweet"></i><span
                  class="wd-number">${post.retweets}</span></a>
          <a href="#" class="wd-substat"><i class="fa-solid fa-heart"></i><span
                  class="wd-number">${post.likes}</span></a>
          <a href="#" class="wd-substat"><i class="fa-solid fa-arrow-up-from-bracket"></i></a>
      </div>
  </div>
</div>
    `;
};

export default PostContentItem;
