const PostSummaryItem = (post) => {
  return `
        <!-- article post 1 -->
        <div class="wd-ma wd-bottomline p-2 d-flex flow-column justify-content-between wd-color-text">
            <!-- text content -->
            <div>
                <!-- topic -->
                <div>
                    <span class="wd-color-subtext">${post.topic}</span>
                </div>
                <!-- author and date -->
                <div>
                    <span class="wd-font-bold">${post.userName}</span>
                    <i class="fa-solid fa-circle-check"></i>
                    <span class="wd-color-subtext">• ${post.time}</span>
                </div>
                <!-- article title -->
                <div>
                    <span class="wd-font-bold">${post.title}</span>
                </div>
            </div>
            <!-- post image -->
            <div class="p-2">
                <img src=${post.image} class="rounded wd-img-sq-100" alt="bongocat in space">
            </div>
            </div>
    `;
};

export default PostSummaryItem;
