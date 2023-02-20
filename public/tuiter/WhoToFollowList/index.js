import whos from "./whos.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
  return `
    <div class="wd-bg-rd-gray wd-color-text">
      <!-- title -->
      <div class="p-2">
          <span class="wd-font-bold wd-font-lg">Who to follow</span>
      </div>
    ${whos
      .map((who) => {
        return WhoToFollowListItem(who);
      })
      .join("")}
    </div>
    `;
};

export default WhoToFollowList;
